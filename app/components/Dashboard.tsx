"use client";

import React, { useCallback } from "react";
import { BookGrid } from "./BookGrid";
import { BookGridFallBack } from "./BookGridFallBack";
import {
	useGetBooksQuery,
	useGetGenresQuery,
	useGetUsersQuery,
} from "../redux/api/apiSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "./SearchBar";
import { GenreFilter } from "./GenreFilter";
import { LoginModal } from "./modals/LoginModal";
import { UserFilter } from "./UserFilter";

export const Dashboard: React.FC = () => {
	const router = useRouter();

	// Get search params from URL
	const searchParams = useSearchParams();

	// Get current params
	const title = searchParams.get("title") || "";
	const genreId = searchParams.get("genreId") || "";
	const userId = searchParams.get("userId") || "";

	// Fetch genres for dropdown
	const { data: genres } = useGetGenresQuery();

	// Fetch users
	const { data: users } = useGetUsersQuery();

	// Fetch books with params
	const {
		data: books,
		isLoading,
		isError,
	} = useGetBooksQuery({
		title,
		genreId,
		userId,
	});

	// Update URL params
	const setQueryParam = useCallback(
		(key: string, value: string) => {
			const params = new URLSearchParams(
				Array.from(searchParams.entries()),
			);
			if (value) {
				params.set(key, value);
			} else {
				params.delete(key);
			}
			router.push(`?${params.toString()}`);
		},
		[searchParams],
	);

	return (
		<div className="py-8">
			<h1 className="hidden sm:block text-xl font-bold mb-6">Filters</h1>

			<div className="flex flex-col sm:flex-row gap-4 mb-6">
				<SearchBar title={title} setQueryParam={setQueryParam} />
				<GenreFilter
					genreId={genreId}
					genres={genres}
					setQueryParam={setQueryParam}
				/>
				<UserFilter
					userId={userId}
					users={users}
					setQueryParam={setQueryParam}
				/>
			</div>

			{isLoading ? (
				<BookGridFallBack />
			) : isError || !books ? (
				<div className="text-center text-red-500">
					Failed to load books.
				</div>
			) : (
				<BookGrid books={books} />
			)}

			{/* Render the modals */}
			<LoginModal />
		</div>
	);
};
