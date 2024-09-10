import MainChat from "@/components/mainComponents/mainChat/MainChat";
import SideBar from "@/components/mainComponents/side/SideBar";

export default function Home() {
    return (
        <div className="flex w-4/5 mx-auto">
            <SideBar/>
            <MainChat/>
        </div>
    );
};