"use client"

import MainChat from "@/components/mainComponents/mainChat/MainChat";
import SideBar from "@/components/mainComponents/side/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "@/components/utils/redux/features/username/userNameSlice";
import { RootState } from "@/components/utils/redux/store";
import Registration from "@/components/mainComponents/registration/Registration";

export default function Home() {
    const username = useSelector((state: RootState) => state.username.userName);
    const dispatch = useDispatch();
    return (
        <div>
            {username.length 
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