"use client";

import type React from "react";

interface ButtonProps {
	variant?: "primary" | "secondary" | "tertiary";
	children: React.ReactNode;
	onClick?: () => void;
}

export function Button({
	variant = "primary",
	children,
	onClick,
}: ButtonProps) {
	return (
		<button
			className={
				variant === "primary"
					? "bg-slate-900 hover:bg-slate-900/80 text-white h-8 px-4 rounded-md font-bold text-sm cursor-pointer"
					: variant === "secondary"
						? "bg-slate-400 hover:bg-slate-400/80 text-gray-900 h-8 px-4 rounded-md font-bold text-sm cursor-pointer"
						: " border border-black hover:bg-slate-200/80 text-black h-8 px-4 rounded-md font-bold text-sm cursor-pointer"
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
