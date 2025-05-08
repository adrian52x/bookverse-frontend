import { Genre } from "@/types";
import React from "react";

interface GenreFilterProps {
    genreId: string;
    genres: Genre[] | undefined;
    setQueryParam: (key: string, value: string) => void;
}

export const GenreFilter: React.FC<GenreFilterProps> = ({
    genreId,
    genres,
    setQueryParam,
}) => {

    return (
        <select
            className="border px-2 py-1 rounded"
            value={genreId}
            onChange={e => setQueryParam("genreId", e.target.value)}
        >
            <option value="">All genres</option>
            {genres?.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
            ))}
        </select>
    );
}