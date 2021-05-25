import { browser } from "webextension-polyfill-ts";
import { formatNumber } from "libphonenumber-js";
import type { getAccountName_getNumbers_edges } from "./graphqltypes";
import options from "./options-storage";
async function loadContextMenu() {
	try {
		try {
			await browser.contextMenus.removeAll();
		} catch (e) {
			console.error(e);
		}
		const { numbers } = await options.getAll();
		const numbersArr = JSON.parse(numbers) as getAccountName_getNumbers_edges[];
		if (!numbersArr.length) return;
		else if (numbersArr.length === 1) {
			await browser.contextMenus.create({
				id: "paste-" + numbersArr[0].node.id,
				title:
					"Add ShieldNumber: " +
					formatNumber(numbersArr[0].node.id, "NATIONAL"),
				contexts: ["editable"],
			});
		} else {
			const parentId = await browser.contextMenus.create({
				id: "paste-number-parent",
				title: "Add ShieldNumber",
				contexts: ["editable"],
			});
			for (const edge of numbersArr) {
				await browser.contextMenus.create({
					parentId,
					id: "paste-" + edge.node.id,
					title:
						formatNumber(edge.node.id, "NATIONAL") +
						(edge.node.name && " - " + edge.node.name),
					contexts: ["editable"],
				});
			}
		}
	} catch (e) {
		console.error("Context menu error", e);
	}
}
loadContextMenu();
let timer: ReturnType<typeof setTimeout>;
browser.storage.onChanged.addListener(() => {
	if (timer) clearTimeout(timer);
	timer = setTimeout(loadContextMenu, 500);
});
browser.contextMenus.onClicked.addListener(async (o) => {
	const t = await browser.tabs.query({
		active: true,
		currentWindow: true,
	});
	const phoneNumber = o.menuItemId.toString().substring("paste-".length);
	const payload = {
		command: "pasteNumber",
		body: phoneNumber,
	};
	const { href, title } = await browser.tabs.sendMessage(t[0].id, payload);
	uploadUsedNumber({ href, title, number: phoneNumber });
});
browser.runtime.onMessage.addListener(
	async ({
		number,
		href,
		title,
	}: {
		number: string;
		href: string;
		title: string;
	}) => {
		if (number && href) await uploadUsedNumber({ number, title, href });
	}
);
async function uploadUsedNumber({
	href,
	title,
	number,
}: {
	href: string;
	title: string;
	number: string;
}) {
	const { uploadKey, uploadUrl } = await options.getAll();
	if (uploadUrl) {
		//send back to home base
		const body = JSON.stringify({
			url: href,
			title,
			key: uploadKey,
			number,
		});

		const response = await await fetch(uploadUrl, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body,
		});

		const { key: newKey } = await response.json();
		await options.set({ uploadKey: newKey });
	} else {
		console.warn("There is no targeturl set", { uploadUrl, uploadKey });
	}
}
