import {
	Book,
	BookQueryParams,
	BookApiResponse,
	DbChangeResponse,
	Genre,
	LogoutResponse,
	User,
	UserAuthInput,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000/api",
		credentials: "include",
		prepareHeaders: (headers) => {
			headers.set("Accept", "application/json");
			return headers;
		},
	}),
	tagTypes: ["Books", "Genres", "Users"],

	endpoints: (builder) => ({
		getBooks: builder.query<BookApiResponse[], BookQueryParams>({
			query: (queryParams) => {
				if (!queryParams) return "/books";

				// URLSearchParams is used to safely construct the query string for filtering books.
				const search = new URLSearchParams();

				// Append each query parameter to the search object if it exists.
				if (queryParams.title)
					search.append("title", queryParams.title);
				if (queryParams.genreId)
					search.append("genreId", queryParams.genreId);
				if (queryParams.userId)
					search.append("userId", queryParams.userId);
				const queryString = search.toString();

				return `/books?${queryString}`;
			},
			providesTags: ["Books"],
		}),

		getGenres: builder.query<Genre[], void>({
			query: () => "/genres",
			providesTags: ["Genres"],
		}),

		addBook: builder.mutation<Book, Partial<Book>>({
			query: (book) => ({
				url: "/books",
				method: "POST",
				body: book,
			}),
			invalidatesTags: ["Books"],
		}),

		updateBook: builder.mutation<Book, Partial<Book>>({
			query: (book) => ({
				url: `/books/${book.id}`,
				method: "PUT",
				body: book,
			}),
			invalidatesTags: ["Books"],
		}),

		deleteBook: builder.mutation<DbChangeResponse, string>({
			query: (id) => ({
				url: `/books/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Books"],
		}),

		// User-related endpoints
		getUsers: builder.query<User[], void>({
			query: () => "/users",
			providesTags: ["Users"],
		}),
		authenticateUser: builder.mutation<User, UserAuthInput>({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
		}),
		registerUser: builder.mutation<DbChangeResponse, UserAuthInput>({
			query: (credentials) => ({
				url: "/register",
				method: "POST",
				body: credentials,
			}),
		}),
		currentUser: builder.query<User, void>({
			query: () => "/users/me",
			providesTags: ["Users"],
		}),
		logoutUser: builder.mutation<LogoutResponse, void>({
			query: () => ({
				url: "/logout",
				method: "POST",
			}),
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetGenresQuery,
	useAddBookMutation,
	useUpdateBookMutation,
	useDeleteBookMutation,
	useGetUsersQuery,
	useAuthenticateUserMutation,
	useRegisterUserMutation,
	useCurrentUserQuery,
	useLogoutUserMutation,
} = apiSlice;
