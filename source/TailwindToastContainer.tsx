import React, { FC } from "react";
import { ToastContainer, ToastContainerProps } from "@raydeck/react-toastify";
import "@raydeck/react-toastify/dist/ReactToastify.css";

const contextClass = {
	success: "bg-blue-800",
	error: "bg-red-600",
	info: "bg-gray-600",
	warning: "bg-orange-400",
	default: "bg-indigo-600",
	dark: "bg-white-600 font-gray-300",
};
const TailwindToastContainer: FC<ToastContainerProps> = (props) => {
	return (
		<ToastContainer
			toastClassName={({ type }) => {
				const myclass =
					contextClass[type || "default"] +
					" flex p-1 min-h-10 rounded-t-md justify-between overflow-hidden cursor-pointer";
				return myclass;
			}}
			bodyClassName={() => "text-sm text-md font-white font-med block p-3"}
			position="bottom-center"
			autoClose={1500}
			{...props}
		/>
	);
};
export default TailwindToastContainer;
