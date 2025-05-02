# BookVerse - Frontend

A modern book tracking application frontend built with Next.js, TypeScript, and Tailwind CSS. This repository contains the client-side implementation for the BookVerse application.

## Tech Stack

- **Next.js 15**: Modern React framework with enhanced features
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS 4**: Utility-first CSS framework for styling
- **Redux Toolkit**: For state management
- **RTK Query**: For data fetching and caching

## Project Structure

```
client/
├── app/                      # Next.js app directory
│   ├── favicon.ico           # Site favicon
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── public/                   # Static assets
├── node_modules/             # Dependencies
├── .gitignore                # Git ignore file
├── next.config.ts            # Next.js configuration
├── next-env.d.ts             # Next.js TypeScript definitions
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── README.md                 # This file
└── tsconfig.json             # TypeScript configuration
```

## Features

- **Responsive Book Dashboard**: Adapts from mobile to desktop with a fluid grid system
- **Search Functionality**: Real-time filtering of books by title
- **Genre Filtering**: Dropdown selection to filter books by genre
- **Status Visualization**: Color-coded indicators for reading status
- **Redux State Management**: Centralized state with Redux Toolkit
- **API Integration**: RTK Query for efficient data fetching with caching

## Implementation Requirements

### Must Have

1. **TypeScript Integration**
   - Strong typing for all components and Redux state
   - Type-safe API interactions
   - Interface definitions for all data models

2. **Tailwind CSS Styling**
   - Responsive design using Tailwind's utility classes
   - Custom color scheme for status indicators
   - Mobile-first approach

3. **Redux Toolkit Implementation**
   - Store configuration
   - Book and genre slices
   - Filtering logic in reducers

4. **Responsive UI**
   - 1 column on mobile devices (< 640px)
   - 2 columns on small tablets (640px - 768px)
   - 3 columns on large tablets (768px - 1024px)
   - 4 columns on desktop (> 1024px)

### Nice to Have

1. **RTK Query Setup**
   - API endpoint definitions
   - Automated refetching
   - Cache invalidation
   - Loading and error states

2. **Error Management**
   - Toast notifications for errors
   - Fallback UI components
   - Error boundaries
   - Retry mechanisms

## Getting Started

### Prerequisites

- Node.js (v22 or later recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone git@github.com:io-m/bookverse-frontend.git
cd client
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at http://localhost:3000.

### Connecting to Backend

By default, the frontend will attempt to connect to the backend API at http://localhost:5000. Ensure that the backend server is running before starting the frontend application.

## Component Structure - example feel free to improvise

The BookVerse frontend is built around these key components:

```
Components/
├── BookCard                 # Individual book display
├── BookGrid                 # Responsive grid of books
├── SearchBar                # Title search input
├── GenreFilter              # Genre dropdown
└── Dashboard                # Main container component
```

### Redux Structure

```
Redux/
├── store.ts                 # Store configuration
├── slices/
│   ├── booksSlice.ts        # Books state management
│   └── genresSlice.ts       # Genres state management
└── api/
    └── apiSlice.ts          # RTK Query API definitions
```

## Code Sample - Book Card Component example -> feel free to go crazy with it

```tsx
import React from 'react';
import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

const statusColors = {
  to_read: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  read: 'bg-green-100 text-green-800'
};

const statusText = {
  to_read: 'To Read',
  in_progress: 'Reading',
  read: 'Read'
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200 relative">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {book.genreName}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded ${statusColors[book.status]}`}>
            {statusText[book.status]}
          </span>
        </div>
      </div>
    </div>
  );
};
```

## Contributing

This is a code challenge repository. To participate, please FORK this repository and push your changes to your forked repository. Do not create pull requests to the original repository.

## Next Steps

1. **Add Redux Toolkit**:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Add RTK Query**:
   RTK Query is included with Redux Toolkit

3. **Implement API Services**:
   Create API endpoints for books and genres

4. **Develop Book Management Features**:
   Add, edit, and delete functionality for books

5. **Enhance UI/UX**:
   Add animations, transitions, and more interactive elements