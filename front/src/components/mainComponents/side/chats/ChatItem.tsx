export default function ChatItem({ name } : { name: string }) {
    return (
        <div className="flex items-center gap-4 text-2xl border rounded py-5 pl-3 hover:bg-black hover:text-white transition cursor-pointer">
            <div className="avatar w-12 h-12 bg-red-300 rounded-full"></div>
            <p>{name}</p>
        </div>
    )
}