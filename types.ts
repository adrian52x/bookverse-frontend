export interface Book {
	id: number;
	title: string;
	author: string;
	genreId: number;
	userId: number;
	coverImage?: string;
	status: BookStatus;
	createdAt: string;
}

export interface BookApiResponse extends Book {
	genreName: string;
	username: string;
}

export interface BookQueryParams {
	title?: string;
	genreId?: string;
	userId?: string;
}

export type BookStatus = "to_read" | "in_progress" | "read";

export interface Genre {
	id: number;
	name: string;
}
export interface User {
	id: number;
	username: string;
}

export interface UserAuthInput {
	username: string;
	password: string;
}

export interface LogoutResponse {
	message: string;
}

// Drizzle ORM response type
export interface DbChangeResponse {
	changes: number;
	lastInsertRowid?: number;
}

export interface ApiError {
	status: number;
	data: ApiErrorData;
}

// Error response can have either a string message or an array of validation errors
export interface ApiErrorData {
	message: string | ValidationError[];
	url?: string;
	method?: string;
}

export interface ValidationError {
	type: string;
	value: string;
	msg: string;
	path: string;
	location: string;
}

export interface CustomNotification {
	message: string;
	type?: "success" | "error" | "info";
}
