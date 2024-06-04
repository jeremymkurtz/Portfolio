
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import UserInterface from "../components/ui";
import {anybody, inter, jakarta} from "./fonts";
import type { Viewport } from 'next'
import { Providers } from './providers'
import PageLoading from "@/components/PageLoading";
import JK_light from "../../public/images/JK-Circle Modern-extrasmall.png";

import JK_dark from "../../public/images/JK-Circle Modern-small-dark.png";


export const metadata: Metadata = {
    title: "Jeremy Kurtz",
    description: "Jeremy Kurtz's personal website",
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '../../public/images/JK-Circle Modern-extrasmall.png',
                href: '../../public/images/JK-Circle Modern-extrasmall.png',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '../../public/images/JK-Circle Modern-extrasmall.png',
                href: '../../public/images/JK-Circle Modern-extrasmall.png',
            },
        ],
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${anybody.variable} ${jakarta.variable} h-svh bg-background dark:bg-backgroundDark`}
              style={{WebkitOverflowScrolling: 'auto'}}
        >
        <PageLoading/>
        <Providers>
            <UserInterface/>
            <main className={" text-primary dark:text-primaryDark w-full h-full flex justify-center items-center "}>

                {children}

            </main>
        </Providers>

        </body>
        </html>
    );
}
