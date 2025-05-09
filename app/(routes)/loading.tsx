"use client";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";

export default function Loading() {
	return (
		<div className="h-screen">
			<div className="flex h-full items-center justify-center">
				<LoadingSpinner />
			</div>
		</div>
	);
}
