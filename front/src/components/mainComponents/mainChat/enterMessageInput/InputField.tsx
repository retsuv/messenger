import { SendHorizonal } from "lucide-react";

export default function Inputfield() {
    return(
        <div className="w-2/3 mx-auto flex gap-4">
            <input type="text" className="border-2 rounded w-full h-[50px] pl-3"/>
            <button>
                <SendHorizonal 
                    color="white" 
                    className="w-auto h-auto bg-black rounded-full cursor-pointer"
                    style={{
                        padding: "0.85rem"
                    }}
                />
            </button>
        </div>
    )
}