import * as ScrollArea from '@radix-ui/react-scroll-area';
import ChatItem from "./ChatItem";

export default function ChatList() {
    return (
        <div className="flex flex-col border">
            <ScrollArea.Root className="h-[840px] overflow-hidden">
                <ScrollArea.Viewport className="w-full h-full" style={{borderRadius: "inherit"}}>
                    <ChatItem name='lila'/>
                    <ChatItem name='kate'/>
                    <ChatItem name='joey'/>
                    <ChatItem name='corey'/>
                    <ChatItem name='mick'/>
                </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </div>
    )
}