import { RootState } from "@/components/utils/redux/store";
import { socket } from "@/components/utils/socket/Socket";
import { EllipsisVertical, Phone, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ReceivingUser() {
    const [receivingUserStatus, setReceivingUserStatus] = useState(false);
    useEffect(() => {
        socket.on("connecting", userStatus => {
            setReceivingUserStatus(userStatus);
        })
    })
    const name = useSelector((state: RootState) => state.companions.currentCompanionName);
    return(
        <div className="flex justify-between border rounded">
            <div className="flex items-center py-3 px-8">
                <div className="avatar w-12 h-12 bg-black rounded-full"></div>
                <div className="flex flex-col ml-5">
                    <p className="cursor-pointer text-xl">{name}</p>
                    <p className="text-xs text-gray-400">
                        {receivingUserStatus ? "online" : "last seen recently."}
                    </p>
                </div>
            </div>
            <div className="flex items-center py-3 px-8 gap-12">
                <Phone color="gray" className="cursor-pointer"/>
                <Search color="gray" className="cursor-pointer"/>
                <EllipsisVertical color="gray" className="cursor-pointer"/>
            </div>
        </div>
    )
}