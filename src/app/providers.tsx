"use client"
import { AuroraProvider } from '@/contexts/AuroraContext'
import { MenuProvider } from '@/contexts/MenuContext'
import { ThemeProvider } from 'next-themes'
import { useAuroraContext } from '@/contexts/AuroraContext'

export function Providers({ children }: { children: React.ReactNode }) {
    const { AuroraOn } = useAuroraContext();
    return (
        <AuroraProvider>
            <ThemeProvider 
                attribute="class" 
                defaultTheme='system' 
                enableSystem
            >
                <MenuProvider>{children}</MenuProvider>
            </ThemeProvider>
        </AuroraProvider>
    );
}