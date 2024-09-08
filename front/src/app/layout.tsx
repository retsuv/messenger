import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provide from "./provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "new telegram",
    description: "from genius for u)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provide>
                    {children}
                </Provide>
            </body>
        </html>
    );
};