import { User } from "@/types";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface UserFilterProps {
	userId: string;
	users: User[] | undefined;
	setQueryParam: (key: string, value: string) => void;
}

export const UserFilter: React.FC<UserFilterProps> = ({
	userId,
	users,
	setQueryParam,
}) => {
	const currentUser = useSelector((state: RootState) => state.auth.user);

	return (
		<select
			className="border px-2 py-1 rounded"
			value={userId}
			onChange={(e) => setQueryParam("userId", e.target.value)}
		>
			<option value="">All users</option>
			{users?.map((user) => (
				<option key={user.id} value={user.id}>
					{user.id === currentUser?.id ? "My Books" : user.username}
				</option>
			))}
		</select>
	);
};
