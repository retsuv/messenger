import combineStrings from "@/components/utils/hashing/combineStrings";
import encryption from "@/components/utils/hashing/encryption";
import { addCompanion } from "@/components/utils/redux/features/companions/companionsSlice";
import { RootState } from "@/components/utils/redux/store";
import { socket } from "@/components/utils/socket/Socket";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function SearchButton({findingName}: {findingName: string}) {
    const userName = useSelector((state: RootState) => state.username.userName);
    const dispatch = useDispatch();
    const router = useRouter();
    return(
        <button
            onClick={() => {
                if(findingName.trim()) {
                    // router.push("/" + combineStrings(encryption(userName), encryption(findingName)));
                    socket.emit("search", combineStrings(encryption(userName), encryption(findingName)));
                    dispatch(addCompanion(findingName));
                }
            }}
        >
            <SearchIcon color="black" className="relative"/>
        </button>
    )
}