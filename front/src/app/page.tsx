"use client";

import { socket } from '../components/utils/socket/Socket';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeRoom } from '@/components/utils/redux/features/rooms/roomSlice';
import { RootState } from '@/components/utils/redux/store';

socket.on("message", mess => {
    console.log(mess);
}); 

export default function Home() {
    const [text, setText] = useState<string>("");
    const dispatch = useDispatch();
    const room = useSelector((state: RootState) => state.room.currentRoom);
    return (
            <>
                <div>
                    <input type="text" onChange={e => setText(e.target.value)} value={text} className='text-black'/>
                    <button className='border rounded text-black bg-white px-3 ml-5' onClick={() => {dispatch(changeRoom(text)); setText("")}}>confirm username</button>
                </div>
                <p className={'text-5xl ' + (room ? "text-green-500" : "text-red-500")}>{room ? room : "nothing"}</p>
            </>
    );
};