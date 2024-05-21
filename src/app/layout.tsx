
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navigation from "../components/ui/navigation";

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
        <body className={`${inter.className} bg-backgroundDark `}>
            <Navigation/>
            <div className={"bg-background dark:bg-backgroundDark text-primary dark:text-primaryDark w-full h-screen flex justify-center items-center "}>
                {children}
            </div>
        </body>
        </html>
    );
}