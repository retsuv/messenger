import combineStrings from "@/components/utils/hashing/combineStrings";
import encryption from "@/components/utils/hashing/encryption";
import { RootState } from "@/components/utils/redux/store";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function SearchButton({findingName}: {findingName: string}) {
    const userName = useSelector((state: RootState) => state.username.userName);
    const router = useRouter();
    return(
        <button
            onClick={() => {
                router.push("/" + combineStrings(encryption(userName), encryption(findingName)));
                console.log(encryption(userName));
                console.log(encryption(findingName));
                console.log(combineStrings(encryption(userName), encryption(findingName)));
                console.log(combineStrings(encryption(findingName), encryption(userName)));
                console.log(combineStrings(encryption(findingName), encryption(userName)) == combineStrings(encryption(userName), encryption(findingName)));
            }}
        >
            <SearchIcon color="black" className="relative"/>
        </button>
    )
}