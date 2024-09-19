"use client"

import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { socket } from "@/components/utils/socket/Socket";
import { useSelector } from "react-redux";
import { RootState } from "@/components/utils/redux/store";
import { parseDate } from "@/components/utils/hashing/parseDate";

export default function Inputfield() {
    const [messText, setMessText] = useState("");
    const userName = useSelector((state: RootState) => state.username.userName);

    function sendMessage() {
        socket.emit("chatting", {text: messText, date: parseDate(new Date()), byUser: true, author: userName});
        setMessText("");
    }

    return(
        <div className="w-2/3 mx-auto flex gap-4">
            <input
                onKeyDown={e => {if(e.keyCode == 13 && messText.trim()) sendMessage()}}
                type="text"
                className="border-2 rounded w-full h-[50px] pl-3"
                onChange={e => setMessText(e.target.value)}
                value={messText}
            />
            <button onClick={() => {
                if(messText.trim()) {
                    sendMessage();
                }
            }}>
                <SendHorizonal 
                    color="white" 
                    className="w-auto h-auto bg-black transition rounded-full cursor-pointer"
                    style={{
                        padding: "0.85rem"
                    }}
                />
            </button>
        </div>
    );
};