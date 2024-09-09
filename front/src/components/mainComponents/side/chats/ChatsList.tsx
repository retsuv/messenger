import { ScrollArea, ScrollAreaThumb } from "@radix-ui/react-scroll-area";
import ChatItem from "./ChatItem";

export default function ChatList() {
    return (
        <div className="flex flex-col">
            <ScrollArea>
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
                <ChatItem name="lila"/> 
            </ScrollArea>

        </div>
    )
}