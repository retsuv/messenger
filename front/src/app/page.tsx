"use client"

import MainChat from "@/components/mainComponents/mainChat/MainChat";
import SideBar from "@/components/mainComponents/side/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "@/components/utils/redux/store";
import Registration from "@/components/mainComponents/registration/Registration";
import { socket } from "@/components/utils/socket/Socket";

export default function Home() {
    console.log(socket.id);
    const username = useSelector((state: RootState) => state.username.userName);
    return (
        <div>
            {username
                ?
                    <div className="flex w-4/5 mx-auto">
                        <SideBar/>
                        <MainChat/>
                    </div>
                :
                    <Registration/>
            }
        </div>
    );
};