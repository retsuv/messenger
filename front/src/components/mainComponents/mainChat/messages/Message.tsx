interface IProps {
    children: React.ReactNode
    time: string
    byUser?: boolean
}

export default function Message({ children, time, byUser }: IProps) {   
    return(
        <div className={"w-full flex" + (byUser ? " justify-end" : "")}>
            <div
                className={"flex gap-1 items-end h-fit py-1 px-3 rounded-md " + (byUser ? " bg-transparent border text-black" : " bg-black text-white")}
                style={{margin: "4px 8px 5px", maxWidth: "50%"}}
                >
                <p 
                    // className="overflow-hidden"
                >
                    {children}
                </p>
                <span className="text-[10px]">
                    {time}
                </span>
            </div>
        </div>
    )
}