import options from "./options-storage";
import {
	getAccountName_getAccount,
	getAccountName_getNumbers_edges,
} from "./graphqltypes";
import { browser } from "webextension-polyfill-ts";

console.log("RHD Planted the SHIELDNUMBER flag");
(async () => {
	console.log("I start with options", await options.getAll());
})();
window.addEventListener("shieldNumber_updateAccount", (({
	detail: { numbers, account },
}: CustomEvent<{
	numbers: getAccountName_getNumbers_edges[];
	account: getAccountName_getAccount;
}>) => {
	(async () => {
		const payload = {
			accountName: account.name,
			uploadKey: account.extensionData.key,
			uploadUrl: account.extensionData.url,
			numbers: JSON.stringify(numbers),
		};
		console.log("I will save the options as provided here", payload);
		await options.setAll(payload);
		console.log("I saved the options", await options.getAll());
	})();
}) as EventListener);
