export default function ChatItem({ name } : { name: string }) {
    return (
        <div className="text-2xl border rounded py-5 pl-3 hover:bg-black hover:text-white transition">
            <p>{name}</p>
        </div>
    )
}