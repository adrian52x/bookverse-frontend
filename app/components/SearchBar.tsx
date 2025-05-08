import React, { useEffect, useState } from "react";

interface SearchFilterProps {
    title: string;
    setQueryParam: (key: string, value: string) => void;
}

export const SearchBar: React.FC<SearchFilterProps> = ({
    title,
    setQueryParam,
}) => {
    const [inputValue, setInputValue] = useState(title);

    // Debounce updating the URL param
    useEffect(() => {
        const debounce = setTimeout(() => {
            setQueryParam("title", inputValue);
        }, 500); 

        return () => clearTimeout(debounce);
    }, [inputValue, setQueryParam]);

    return (
        <input
            type="text"
            placeholder="Search by title"
            className="border px-2 py-1 rounded"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    );
}