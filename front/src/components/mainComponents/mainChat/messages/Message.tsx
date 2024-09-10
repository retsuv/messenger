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
                >
                <p className="max-w-[100px]">
                    {children}
                </p>
                <span className="text-[10px]">
                    {time}
                </span>
            </div>
        </div>
    )
}