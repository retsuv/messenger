"use client"

import * as ScrollArea from "@radix-ui/react-scroll-area";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/utils/redux/store";
import { socket } from "@/components/utils/socket/Socket";
import { useEffect } from "react";
import {IMessage} from "@/components/utils/redux/features/messages/messagesSlice";
import { addMessage } from "@/components/utils/redux/features/companions/companionsSlice";

let i = 0;

function getMessages(dispatch: any) {
    socket.on("chatting", message => {
        dispatch(addMessage(message));
    });
};

export default function MessagesList() {

    const allMessages = useSelector((state: RootState) => state.companions.currentCompanionMessages);
    const userName = useSelector((state: RootState) => state.username.userName);
    const dispatch = useDispatch();

    useEffect(() => {
        i++;
        if( i % 4 == 0 ) getMessages(dispatch);
    }, []);

    return(
            <ScrollArea.Root className="h-[780px] overflow-hidden w-2/3 mx-auto mt-4">
                <ScrollArea.Viewport className="w-full h-full overflow-hidden" style={{borderRadius: "inherit"}}>
                    {/* <div className="flex flex-col gap-y-px"> */}
                        {allMessages.map(({text, date, author}, index) => <Message key={index} time={date} byUser={author == userName}>{text}</Message>)}
                        {/* <Message time="00:00">qwe</Message> */}
                        {/* <Message time="00:00" byUser>qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty</Message> */}
                    {/* </div> */}
                </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
    );
};  