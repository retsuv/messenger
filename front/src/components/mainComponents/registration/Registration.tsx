"use client"

import { useState } from "react"
import { useDispatch } from "react-redux";
import { setUserName } from "@/components/utils/redux/features/username/userNameSlice";
import { socket } from "@/components/utils/socket/Socket";
import encryption from "@/components/utils/hashing/encryption";
import { parseDate } from "@/components/utils/hashing/parseDate";

export default function Registration() {

    function sendUserName(name: string) {
        dispatch(setUserName(name)); 
        socket.emit("user", {hashedName: encryption(name), userId: socket.id, time: parseDate(new Date())});
    };

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    return(
        <div className="mx-auto w-fit">
            <div className="flex flex-col items-center gap-y-5 border rounded p-8">
                <span>
                    enter your name here
                </span>
                <input type="text" className="border p-2" onChange={e => setName(e.target.value)} value={name}/>
                <button 
                    className="border bg-black hover:bg-white text-white hover:text-black transition rounded py-2 px-4"
                    onClick={() => sendUserName(name)}
                >
                    confirm
                </button>
            </div>
        </div>
    )
}