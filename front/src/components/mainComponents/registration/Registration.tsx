"use client"

import { useState } from "react"
import { useDispatch } from "react-redux";
import { setUserName } from "@/components/utils/redux/features/username/userNameSlice";

export default function Registration() {
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
                    onClick={() => dispatch(setUserName(name))}
                >
                    confirm
                </button>
            </div>
        </div>
    )
}