"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { clearNotification } from "@/app/redux/slices/notificationSlice";
import { useEffect, useState } from "react";

export const CustomNotification: React.FC = () => {
	const dispatch = useDispatch();
	const { message, type } = useSelector(
		(state: RootState) => state.notification,
	);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (message) {
			setVisible(true);
			const timer = setTimeout(() => {
				setVisible(false);
				setTimeout(() => dispatch(clearNotification()), 400);
			}, 3000);
			return () => {
				clearTimeout(timer);
				setVisible(false);
			};
		}
	}, [message, dispatch]);

	if (!message) return null;

	const color =
		type === "success"
			? "bg-green-500"
			: type === "error"
				? "bg-red-500"
				: "bg-slate-500";

	return (
		<div
			className={`fixed top-24 left-1/2 transform -translate-x-1/2 opacity-80 px-2 py-1 rounded text-white shadow-lg z-50 
                ${color}
                opacity-90
                transition-all duration-400
                ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
        `}
		>
			{message}
		</div>
	);
};
