"use client";

import { Book } from "@/types";
import React, { useState } from "react";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

interface BookCardProps {
	book: Book;
}

const statusColors = {
	to_read: "bg-blue-100 text-blue-800",
	in_progress: "bg-yellow-100 text-yellow-800",
	read: "bg-green-100 text-green-800",
};

const statusText = {
	to_read: "To Read",
	in_progress: "Reading",
	read: "Read",
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
	const [hovered, setHovered] = useState(false);

	// Total for both should be 330px
	const IMAGE_HEIGHT = 220;
	const DETAILS_HEIGHT = 110;

	const IMAGE_HEIGHT_HOVER = 130;
	const DETAILS_HEIGHT_HOVER = 200;

	return (
		<div
			className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			//style={{ height: IMAGE_HEIGHT + DETAILS_HEIGHT }} // fixed card height
		>
			{/* Image section */}
			<div
				className="bg-gray-200 relative flex items-center justify-center transition-all duration-300 ease-in-out"
				style={{
					height: hovered ? IMAGE_HEIGHT_HOVER : IMAGE_HEIGHT,
				}}
			>
				{book.coverImage ? (
					<img
						src={book.coverImage}
						alt={book.title}
						className="w-full h-full object-cover"
					/>
				) : (
					<ImagePlaceholder width={100} height={100} />
				)}
			</div>

			{/* Details section */}
			<div
				className="p-4 transition-all duration-300 ease-in-out overflow-hidden"
				style={{
					height: hovered ? DETAILS_HEIGHT_HOVER : DETAILS_HEIGHT,
				}}
			>
				<h3 className="font-bold text-lg truncate">{book.title}</h3>
				<p className="text-gray-600 text-sm mb-2">{book.author}</p>
				<div className="flex justify-between items-center mt-2">
					<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
						{book.genreId}
					</span>
					<span
						className={`text-xs font-medium px-2 py-1 rounded ${statusColors[book.status]}`}
					>
						{statusText[book.status]}
					</span>
				</div>

				{/* Extra info on hover */}
				<div
					className={`transition-opacity duration-300 ease-in-out ${hovered ? "opacity-100 mt-4" : "opacity-0 h-0 overflow-hidden"}`}
				>
					<div className="text-xs text-gray-500">
						<span className="font-semibold">Added by:</span>{" "}
						{book.userId}
					</div>
					<div className="text-xs text-gray-400">
						<span className="font-semibold">Created:</span>{" "}
						{new Date(book.createdAt).toLocaleDateString()}
					</div>
				</div>
			</div>
		</div>
	);
};
