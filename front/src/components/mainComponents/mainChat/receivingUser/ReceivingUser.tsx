import { RootState } from "@/components/utils/redux/store";
import { EllipsisVertical, Phone, Search } from "lucide-react";
import { useSelector } from "react-redux";

export default function ReceivingUser() {
    const name = useSelector((state: RootState) => state.companions.currentCompanionName);

    return(
        <div className="flex justify-between border rounded">
            <div className="flex items-center py-3 px-8">
                <div className="avatar w-12 h-12 bg-black rounded-full"></div>
                <div className="flex flex-col ml-5">
                    <p className="cursor-pointer text-xl">
                        {name}
                    </p>
                    <p className="text-xs text-gray-400">
                        last seen recently.
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