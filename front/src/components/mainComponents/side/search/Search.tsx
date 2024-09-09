"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search() {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="flex gap-3">
            <input type="text" className="rounded w-auto border text-black" onChange={e => setSearchText(e.target.value)} value={searchText}/>
            <SearchIcon color="black"/>
        </div>
    )
}