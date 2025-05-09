"use client";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { RootState } from "../redux/store";
import { clearUser, openModal } from "../redux/slices/authSlice";
import { useLogoutUserMutation } from "../redux/api/apiSlice";
import { User } from "@/types";
import { Button } from "./ui/Button";
import { showNotification } from "../redux/slices/notificationSlice";

export const Nav: React.FC = () => {
	const currentUser = useSelector((state: RootState) => state.auth.user);

	return (
		<nav className="sticky top-0 z-50  transition-all duration-300 bg-background/60 backdrop-blur-md shadow-lg">
			<div className="container mx-auto flex px-8 py-4 justify-between items-center">
				<Logo />
				<ul className="flex space-x-4">
					{currentUser ? (
						<>
							<DisplayUser user={currentUser} />
							<LogoutButton />
						</>
					) : (
						<>
							<LoginButton />
							<RegisterButton />
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

const DisplayUser: React.FC<{ user: User }> = ({ user }) => {
	return (
		<>
			{user ? (
				<div className="flex items-center space-x-2">
					<p className="hidden sm:block italic">Welcome,</p>
					<span className="text-lg font-bold">{user.username}</span>
				</div>
			) : null}
		</>
	);
};

const LoginButton: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<Button variant="primary" onClick={() => dispatch(openModal("login"))}>
			Login
		</Button>
	);
};

const LogoutButton: React.FC = () => {
	const dispatch = useDispatch();
	const [logout] = useLogoutUserMutation();

	const handleLogout = async () => {
		try {
			const response = await logout().unwrap();
			dispatch(clearUser());
			dispatch(
				showNotification({ message: response.message, type: "info" }),
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

	return (
		<Button variant="tertiary" onClick={() => handleLogout()}>
			Logout
		</Button>
	);
};

const RegisterButton: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<Button
			variant="tertiary"
			onClick={() => dispatch(openModal("register"))}
		>
			Register
		</Button>
	);
};

const Logo: React.FC = () => {
	return (
		<div className="flex items-center">
			<ImagePlaceholder height={50} width={50} />
			<span className="hidden sm:block ml-2 text-lg font-bold">
				Bookverse
			</span>
		</div>
	);
};
