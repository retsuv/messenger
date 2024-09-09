import ChatList from "./chats/ChatsList";
import ChatsFolders from "./chatsFolders/ChatsFolders";
import SearchAndTheme from "./search/SearchAndTheme";

export default function SideBar() {
    return(
        <div className="flex flex-col w-1/4">
            <SearchAndTheme />
            <ChatsFolders />
            <ChatList />
        </div>
    )
}