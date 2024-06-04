
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import UserInterface from "../components/ui";
import {anybody, inter, jakarta} from "./fonts";
import { Providers } from './providers'
import PageLoading from "@/components/PageLoading";



export const metadata: Metadata = {
    title: "Jeremy Kurtz",
    description: "Jeremy Kurtz's personal website",
    icons: {
        icon: [
            {
                rel: "icon",
                type: 'image/png',
                media: '(prefers-color-scheme: light)',
                url: '/favicon/JK-Cartoon-light.png',
                href: '/favicon/JK-Cartoon-light.png',
            },
            {
                rel: "icon",
                type: 'image/png',
                media: '(prefers-color-scheme: dark)',
                url: '/favicon/JK-Cartoon-dark.png',
                href: '/favicon/JK-Cartoon-dark.png',
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
