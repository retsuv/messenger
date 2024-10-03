import * as ScrollArea from '@radix-ui/react-scroll-area';
import ChatItem from "./ChatItem";
import { useSelector } from 'react-redux';
import { RootState } from '@/components/utils/redux/store';

export default function ChatList() {
    const allCompanions = useSelector((state: RootState) => state.companions.companions);
    return (
        <div className="flex flex-col border">
            <ScrollArea.Root className="h-[840px] overflow-hidden">
                <ScrollArea.Viewport className="w-full h-full" style={{borderRadius: "inherit"}}>
                    {allCompanions.map((element, index) => <ChatItem name={element.name} key={index}/>)}
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
    );
};