import ChatList from "./chats/ChatsList";
import ChatsFolders from "./chatsFolders/ChatsFolders";
import SearchAndTheme from "./search/SearchAndTheme";

export default function SideBar() {
    return(
        <div className="flex flex-col w-1/4 h-full">
            <div className="flex flex-col h-[100px]">
                <SearchAndTheme />
                <ChatsFolders />
            </div>
            <ChatList />
        </div>
    )
}