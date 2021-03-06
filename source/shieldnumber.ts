import options from "./options-storage";
import {
	getAccountName_getAccount,
	getAccountName_getNumbers_edges,
} from "./graphqltypes";
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
		await options.setAll(payload);
	})();
	window.dispatchEvent(new Event("shieldNumber_registered"));
}) as EventListener);
window.dispatchEvent(new Event("shieldNumber_registered"));
