"use client";

import { socket } from '../components/utils/socket/Socket';
import { useEffect, useState } from 'react';

socket.on("message", mess => {
    console.log(mess);
}); 

export default function Home() {
    const [text, setText] = useState("");
    return (
            <>
                <div>
                    <p className='text-3xl mb-5'>connect to room</p>
                    <input type="text" onChange={e => setText(e.target.value)} value={text} className='text-black'/>
                    <button className='border rounded text-black bg-white px-3 ml-5'>confirm</button>
                </div>
            </>
    );
};