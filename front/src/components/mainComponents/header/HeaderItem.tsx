import Link from "next/link";

interface IProps {
    children: React.ReactNode,
    path: string
}

export default function HeaderItem({ children, path } : IProps) {
    return(
        <Link href={path}>
            {children}
        </Link>
    )
}