import combineStrings from "@/components/utils/hashing/combineStrings";
import encryption from "@/components/utils/hashing/encryption";
import { setCurrentCompanion } from "@/components/utils/redux/features/companions/companionsSlice";
import { RootState } from "@/components/utils/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function ChatItem({ name } : { name: string }) {
    const userName = useSelector((state: RootState) => state.username.userName);
    const link = combineStrings(encryption(name), encryption(userName));
    const dispatch = useDispatch();
    return (
        <Link 
            onClick={() => dispatch(setCurrentCompanion(name))}
            href={"/" + link} 
            className={"flex items-center gap-4 text-2xl border rounded py-5 pl-3 hover:bg-black hover:text-white transition cursor-pointer " + (usePathname().includes(link) ? " bg-black text-white" : "")}
        >
            <div className="avatar w-12 h-12 bg-black rounded-full"></div>
            {/* <p>{name.substring(0, 13) + (name.length > 13 ? "..." : "")}</p> */}
            <p>{name}</p>
        </Link>
    )
}