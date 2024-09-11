import { EllipsisVertical, Phone, Search } from "lucide-react";

export default function ReceivingUser() {
    return(
        <div className="flex justify-between border rounded">
            <div className="flex items-center py-3 px-8">
                <div className="avatar w-12 h-12 bg-black rounded-full"></div>
                <div className="flex flex-col ml-5">
                    <p className="cursor-pointer text-xl">Lila</p>
                    <p className="text-xs text-gray-400">last seen today.</p>
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