import Link from "next/link";
import { BookGrid } from "../components/BookGrid";
import { BookGridFallBack } from "../components/BookGridFallBack";
import { isVariableValid } from "../lib/utils";
import { Book } from "@/types";

const booksData: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://example.com/gatsby.jpg",
    genre: {
      id: 1,
      name: "Fiction",
    },
    status: "to_read" ,
    user: {
      id: 1,
      username: "johndoe"
    },
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://example.com/gatsby.jpg",
    genre: {
      id: 1,
      name: "Fiction",
    },
    status: "to_read",
    user: {
      id: 1,
      username: "johndoe"
    },
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://example.com/gatsby.jpg",
    genre: {
      id: 1,
      name: "Fiction",
    },
    status: "to_read",
    user: {
      id: 1,
      username: "johndoe"
    },
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://example.com/gatsby.jpg",
    genre: {
      id: 1,
      name: "Fiction",
    },
    status: "to_read",
    user: {
      id: 1,
      username: "johndoe"
    },
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: {
      id: 1,
      name: "Fiction",
    },
    status: "to_read",
    user: {
      id: 1,
      username: "johndoe"
    },
    createdAt: "2023-10-01T12:00:00Z",
  },
]

export default function Home() {
  return (
    <main className="py-8">
      <h1 className="text-2xl font-bold mb-6">Books</h1>

      {isVariableValid(booksData) ? ( // to test the fallback, change the variable to null or undefined 
        <BookGrid books={booksData} />
      ) : (
        <BookGridFallBack/>
      )}

    </main>

     
  );
}
