"use client";

import encryption from "@/components/utils/hashing/encryption";
import { useEffect, useState } from "react";

export default function page() {
    const [text, setText] = useState<string>("");
    const [hash, setHash] = useState<string>("");
    useEffect(() => {
        if(text) {
            setHash(encryption(text));
            return;
        }
        setHash("");
    }, [text]);
    return(
        <div className="flex flex-col gap-y-6">
            <input
                type="text"
                className="border"
                onChange={e => setText(e.target.value)}
            />
            <p className="text-3xl">{hash}</p>
        </div>
    );
};