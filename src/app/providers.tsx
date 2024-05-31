"use client"
import { MenuProvider } from '@/contexts/MenuContext'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem><MenuProvider>{children}</MenuProvider></ThemeProvider>
}