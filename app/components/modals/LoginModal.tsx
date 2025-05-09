import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useAuthenticateUserMutation } from "@/app/redux/api/apiSlice";
import { closeModal, setUser } from "@/app/redux/slices/authSlice";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { Button } from "../ui/Button";
import { ApiError } from "@/types";
import { getErrorMessage } from "@/app/lib/utils";
import { showNotification } from "@/app/redux/slices/notificationSlice";

export const LoginModal = () => {
	const dispatch = useDispatch();
	const open = useSelector(
		(state: RootState) => state.auth.openModal === "login",
	);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [authenticate, { isLoading, error }] = useAuthenticateUserMutation();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const user = await authenticate({ username, password }).unwrap();
			dispatch(setUser(user));
			dispatch(closeModal());
			dispatch(
				showNotification({
					message: "Login successful!",
					type: "success",
				}),
			);
		} catch (err) {
			dispatch(
				showNotification({
					message: "Somthing wrong...",
					type: "error",
				}),
			);
		}
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-neutral-800/70 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
				<h2 className="text-lg font-bold mb-4">Login</h2>
				<form onSubmit={handleSubmit} className="flex flex-col gap-3">
					<input
						className="border px-2 py-1 rounded"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className="border px-2 py-1 rounded"
						placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{/* Error handling */}
					{error && (
						<div className="text-red-500 text-sm">
							{getErrorMessage((error as ApiError).data)}
						</div>
					)}
					<Button
						type="submit"
						variant="primary"
						disabled={isLoading}
					>
						{isLoading ? <LoadingSpinner /> : "Login"}
					</Button>
					<Button
						variant="tertiary"
						onClick={() => dispatch(closeModal())}
					>
						Cancel
					</Button>
				</form>
			</div>
		</div>
	);
};
