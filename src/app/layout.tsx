
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import UserInterface from "../components/ui";
import {anybody, inter} from "./fonts";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3F2F9' },
    { media: '(prefers-color-scheme: dark)', color: '#2b2b33' },
  ],
  colorScheme: 'dark',
}

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