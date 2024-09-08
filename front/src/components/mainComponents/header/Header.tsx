import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header() {
    return(
        <header className="flex justify-between mt-6 w-3/4 mx-auto">
            <HeaderItem path="/">main</HeaderItem>
            <button>sign up</button>
            <HeaderItem path="/messages">messages</HeaderItem>
        </header>
    )
}