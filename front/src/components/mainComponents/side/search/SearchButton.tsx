import combineStrings from "@/components/utils/hashing/combineStrings";
import encryption from "@/components/utils/hashing/encryption";
import { addCompanion } from "@/components/utils/redux/features/companions/companionsSlice";
import { RootState } from "@/components/utils/redux/store";
import { socket } from "@/components/utils/socket/Socket";
import { SearchIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchButton({findingName, clearName}: {findingName: string, clearName: any}) {
    const userName = useSelector((state: RootState) => state.username.userName);
    const dispatch = useDispatch();
    return(
        <button
            className=""
            onClick={() => {
                if(findingName.trim()) {
                    socket.emit("search", combineStrings(encryption(userName), encryption(findingName)));
                    dispatch(addCompanion(findingName));
                    clearName("");
                }
            }}
        >
            <SearchIcon color="black" className="relative"/>
        </button>
    )
}