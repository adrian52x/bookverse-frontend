'use client'

import React, { useCallback } from 'react'
import { BookGrid } from './BookGrid'
import { BookGridFallBack } from './BookGridFallBack'
import { useGetBooksQuery, useGetGenresQuery, useGetUsersQuery } from '../redux/api/apiSlice'
import { useRouter, useSearchParams } from 'next/navigation'
import { SearchBar } from './SearchBar'
import { GenreFilter } from './GenreFilter'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../redux/slices/authSlice'
import { LoginModal } from './modals/LoginModal'
import { RootState } from '../redux/store'
import { UserFilter } from './UserFilter'

export const Dashboard = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const currentUser = useSelector((state: RootState) => state.auth.user);
    
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
    const { data: books, isLoading, isError } = useGetBooksQuery({
        title,
        genreId,
        userId,
    });

    // Update URL params
    const setQueryParam = useCallback((key: string, value: string) => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (value) {
            params.set(key, value);
        } else {
            console.log("Deleting query param:", key);
            
            params.delete(key);
        }
        router.push(`?${params.toString()}`);
    }, [searchParams]);

    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold mb-6">Books</h1>

            {currentUser ? <p>Welcome, {currentUser.username}</p> : null}

            <div className="flex gap-4 mb-6">
                <SearchBar
                    title={title}
                    setQueryParam={setQueryParam}
                />
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

                {/* Example login button */}
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => dispatch(openModal("login"))}
                >
                    Login
                </button>

            </div>

            {isLoading ? (
                <BookGridFallBack />
            ) : isError || !books ? (
                <div className="text-center text-red-500">Failed to load books.</div>
            ) : (
                <BookGrid books={books} />
            )}


            {/* Render the modals */}
            <LoginModal />
        </div>

        
    )
}
