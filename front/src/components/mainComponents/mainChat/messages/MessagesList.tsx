import * as ScrollArea from "@radix-ui/react-scroll-area";
import Message from "./Message";

export default function MessagesList() {
    return(
            <ScrollArea.Root className="h-[780px] overflow-hidden w-2/3 mx-auto mt-4">
                <ScrollArea.Viewport className="w-full h-full" style={{borderRadius: "inherit"}}>
                    <div className="flex flex-col gap-y-px">
                        <Message time="18:22">Hello</Message>
                        <Message time="18:22" byUser>Hello</Message>
                        <Message time="18:22" byUser>my name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" >my name is stygyanmy name is stygyanmy name is stygyan</Message>
                        <Message time="18:22" byUser>my name is stygyanmy name is stygyanmy name is stygyan</Message>

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