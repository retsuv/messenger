"use client"

import * as ScrollArea from "@radix-ui/react-scroll-area";
import Message from "./Message";
import { useSelector } from "react-redux";
import { RootState } from "@/components/utils/redux/store";

export default function MessagesList() {
    const allMessages = useSelector((state: RootState) => state.messageList.messages);
    return(
            <ScrollArea.Root className="h-[780px] overflow-hidden w-2/3 mx-auto mt-4">
                <ScrollArea.Viewport className="w-full h-full" style={{borderRadius: "inherit"}}>
                    <div className="flex flex-col gap-y-px">
                        {allMessages.map((element: string, index: number) => <Message key={index} time="18:22" byUser={index%2==0}>{element}</Message>)}                        
                    </div>
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