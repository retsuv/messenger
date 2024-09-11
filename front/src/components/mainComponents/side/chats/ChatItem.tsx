import Link from "next/link";

export default function ChatItem({ name } : { name: string }) {
    return (
        <Link href="/" className="flex items-center gap-4 text-2xl border rounded py-5 pl-3 hover:bg-black hover:text-white transition cursor-pointer">
            <div className="avatar w-12 h-12 bg-black rounded-full"></div>
            <p>{name.substring(0, 13) + (name.length > 13 ? "..." : "")}</p>
        </Link>
    )
}