
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import UserInterface from "../components/ui";
import {anybody, inter} from "./fonts";


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
        <body className={`${inter.variable} ${anybody.variable} bg-background dark:bg-backgroundDark w-screen h-screen`}
              style={{WebkitOverflowScrolling: 'auto'}}>
        <UserInterface/>
        <div className={" text-primary dark:text-primaryDark w-full h-full flex justify-center items-center "}>
                {children}
            </div>
        </body>
        </html>
    );
}