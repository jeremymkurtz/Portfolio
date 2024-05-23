
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import UserInterface from "../components/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jeremy Kurtz",
    description: "Jeremy Kurtz's personal website",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-background dark:bg-backgroundDark w-screen h-screen`} style={{ WebkitOverflowScrolling: 'auto' }}>
            <UserInterface/>
            {children}
            {/*<div className={" text-primary dark:text-primaryDark w-full h-full flex justify-center items-center "}>*/}
            {/*    */}
            {/*</div>*/}
        </body>
        </html>
    );
}