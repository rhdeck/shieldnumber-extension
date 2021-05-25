import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
import options from "./options-storage";
import { getAccountName_getNumbers_edges } from "./graphqltypes";
import { browser } from "webextension-polyfill-ts";
import ShieldNumber from "./ShieldNumberLogo";
import { formatNumber } from "libphonenumber-js";
import { useClipboard } from "use-clipboard-copy";
import { DuplicateIcon, ExclamationIcon } from "@heroicons/react/outline";
import TailwindToastContainer from "./TailwindToastContainer";
import { toast } from "@raydeck/react-toastify";
import ReactTooltip from "react-tooltip";
let _triggerUpdate = () => {
	/* no-op */
};
browser.storage.onChanged.addListener(() => {
	if (_triggerUpdate) _triggerUpdate();
});
const App: FC = () => {
	const { copy, isSupported } = useClipboard();
	const [accountName, setAccountName] = useState("");
	const [numbers, setNumbers] = useState<getAccountName_getNumbers_edges[]>([]);
	const triggerUpdate = useCallback(async () => {
		const { numbers, accountName } = await options.getAll();
		const temp = JSON.parse(numbers) as getAccountName_getNumbers_edges[];
		setNumbers(temp);
		setAccountName(accountName);
		ReactTooltip.rebuild();
	}, []);
	useEffect(() => {
		_triggerUpdate = triggerUpdate;
		triggerUpdate();
	}, [triggerUpdate]);
	return (
		<div>
			<ReactTooltip />
			<div className="w-80 p-3 border-gray-400 bg-white border border-1 ">
				{accountName && (
					<div
						className="m-auto w-auto  mb-2 flex justify-start cursor-pointer group"
						onClick={() => {
							browser.tabs.create({ url: "https://app.shieldnumber.com" });
						}}
						data-tip="Open ShieldNumber"
					>
						<ShieldNumber
							className="h-10 w-10 mr-2 text-blue-800 inline"
							strikeColor="#444"
						/>
						<div className="p-0 -mt-1">
							<div className="-mb-1">
								<span className="text-lg font-extrabold text-gray-800 group-hover:text-gray-400">
									Shield
								</span>
								<span className="text-lg font-extrabold text-blue-800 group-hover:text-blue-400">
									Number
								</span>
							</div>
							<h1 className="text-blue-800 text-sm font-medium group-hover:text-blue-400">
								{accountName}
							</h1>
						</div>
					</div>
				)}
				{!accountName && (
					<div className="rounded-md bg-yellow-50 p-4">
						<div className="flex">
							<div className="flex-shrink-0">
								<ExclamationIcon
									className="h-5 w-5 text-yellow-400"
									aria-hidden="true"
								/>
							</div>
							<div className="ml-3">
								<h3 className="text-sm font-medium text-yellow-800">
									Not Yet Initialized
								</h3>
								<div className="mt-2 text-sm text-yellow-700">
									<p>
										Press the button below to replace this warning with your
										ShieldNumber(s)
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
				{numbers && (
					<Fragment>
						{numbers.map(({ node: { name, id } }) => {
							return (
								<div
									onClick={() => {
										if (isSupported()) {
											copy(formatNumber(id, "National"));
											toast.success("Copied to clipboard");
										}
									}}
									data-tip={`Copy ${formatNumber(id, "National")} to clipboard`}
									key={id}
									className="w-full -m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 group flex justify-between cursor-pointer"
								>
									<div>
										<p className="text-base font-medium text-gray-900 mr-2 group-hover:text-gray-500">
											{formatNumber(id, "National")}
										</p>
										<p className="mt-1 text-sm text-gray-500 grodfup-hover:text-gray-300 ">
											{name}
										</p>
									</div>
									<DuplicateIcon className="p-2 h-8 w-8 text-white group-hover:text-gray-200 group-hover bg-blue-800 group-hover:bg-blue-400 rounded-full" />
								</div>
							);
						})}
					</Fragment>
				)}
				<button
					className="w-full bg-blue-800 text-sm text-white mt-5 p-2 hover:bg-blue-400 shadow-sm rounded-md"
					onClick={() =>
						browser.tabs.create({ url: "https://app.shieldnumber.com" })
					}
				>
					{accountName ? "Open ShieldNumber" : "Set Up The Extension"}
				</button>
			</div>
			<TailwindToastContainer />
		</div>
	);
};
export default App;
