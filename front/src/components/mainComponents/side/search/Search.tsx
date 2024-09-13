"use client";

import { useState } from "react";
import SearchButton from "./SearchButton";

export default function Search() {
    const [searchText, setSearchText] = useState<string>("");
    return (
        <div className="flex gap-3 items-center">
            <input type="text" className="rounded border text-black p-1" onChange={e => setSearchText(e.target.value)} value={searchText}/>
            <SearchButton findingName={searchText}/>
        </div>
    )
}