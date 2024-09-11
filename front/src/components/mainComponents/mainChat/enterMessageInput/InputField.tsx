"use client"

import { SendHorizonal } from "lucide-react";
import { useDispatch } from "react-redux";
import { addMessage } from "@/components/utils/redux/features/messages/messagesSlice";
import { useState } from "react";

export default function Inputfield() {
    const [messText, setMessText] = useState("");
    const dispatch = useDispatch();
    return(
        <div className="w-2/3 mx-auto flex gap-4">
            <input
                type="text"
                className="border-2 rounded w-full h-[50px] pl-3"
                onChange={e => setMessText(e.target.value)}
                value={messText}
            />
            <button onClick={() => dispatch(addMessage(messText))}>
                <SendHorizonal 
                    color="white" 
                    className="w-auto h-auto bg-black transition rounded-full cursor-pointer"
                    style={{
                        padding: "0.85rem"
                    }}
                />
            </button>
        </div>
    )
}