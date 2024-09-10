import Inputfield from "./enterMessageInput/InputField";
import MessagesList from "./messages/MessagesList";
import ReceivingUser from "./receivingUser/ReceivingUser";

export default function MainChat() {
    return(
        <div className="flex flex-col w-3/4">
            <ReceivingUser />
            <MessagesList />
            <Inputfield />
        </div>
    )
}