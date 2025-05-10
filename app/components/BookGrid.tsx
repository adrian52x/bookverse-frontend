"use client";
import { BookApiResponse } from "@/types";
import { BookCard } from "./BookCard";

interface BookGridProps {
	books: BookApiResponse[];
}

export const BookGrid: React.FC<BookGridProps> = ({ books }) => {
	return (
		<>
			<div
				className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
				id="books"
			>
				{books.map((book) => (
					<BookCard book={book} key={book.id} />
				))}
			</div>
		</>
	);
};
