import { browser } from "webextension-polyfill-ts";
import { getAccountName_getNumbers_edges } from "./graphqltypes";
import options from "./options-storage";
import { formatNumber } from "libphonenumber-js";
let clickedEl: EventTarget = null;
document.addEventListener(
	"contextmenu",
	(event) => {
		clickedEl = event.target;
	},
	true
);
window.addEventListener("load", async () => {
	if (
		!(
			JSON.parse(
				(await options.getAll()).numbers
			) as getAccountName_getNumbers_edges[]
		).length
	)
		return;
	const inputs = document.querySelectorAll("input");
	for (let j = 0; j < inputs.length; j++) {
		const input = inputs[j];
		if (input.getAttribute("type") === "tel") {
			const button = document.createElement("button");
			button.className = "inputFieldButton";
			const iconURL = browser.runtime.getURL("icon.png");
			button.setAttribute("style", `background-image: url(${iconURL});`);
			input.parentNode.insertBefore(button, input.nextSibling);
			button.addEventListener("click", async () => {
				const { numbers } = await options.getAll();
				const numbersArr = JSON.parse(
					numbers
				) as getAccountName_getNumbers_edges[];
				const number = formatNumber(numbersArr[0].node.id, "NATIONAL");
				insertAtCaret(input, number);
				browser.runtime.sendMessage("fromButton", {
					href: document.location.href,
					title: document.title,
					number: numbersArr[0].node.id,
				});
			});
		}
	}
	// }
});

browser.runtime.onMessage.addListener(
	async (message: {
		command: string;
		body: string;
		targetElementId: number;
	}) => {
		if (message.command === "pasteNumber") {
			insertAtCaret(
				clickedEl as HTMLTextAreaElement | HTMLInputElement,
				message.body
			);
			return { href: document.location.href, title: document.title };
		}
	}
);
function insertAtCaret(
	element: HTMLTextAreaElement | HTMLInputElement,
	text: string
) {
	text = text || "";
	if (element.selectionStart || element.selectionStart === 0) {
		// Others
		const startPos = element.selectionStart;
		const endPos = element.selectionEnd;
		element.value =
			element.value.substring(0, startPos) +
			text +
			element.value.substring(endPos, element.value.length);
		element.selectionStart = startPos + text.length;
		element.selectionEnd = startPos + text.length;
	} else {
		element.value += text;
	}
}
