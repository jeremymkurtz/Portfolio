"use client"
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import { useTheme } from "next-themes";
import {useAuroraContext} from "@/contexts/AuroraContext";

export default function ThemeToggle(props:{size:number}){
    const {AuroraOn,toggleAurora} = useAuroraContext();
    
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();
    useEffect(() => setMounted(true), []);
    const handleThemeSwitch = () => {
        if(AuroraOn) toggleAurora();
        setTheme(resolvedTheme === 'dark'  ? 'light' : 'dark');
    }
    if(!mounted) return (
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
    );
    return(
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width={props.size} height={props.size}
                    className="block icons-style mini-icons cursor-pointer" onClick={handleThemeSwitch}
                    stroke={`${resolvedTheme === 'dark' ? 'var(--primaryDark)' : 'var(--primary)'}`}
                    fill={"none"}
                    strokeWidth={"1.5"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeMiterlimit={"10"}>

            <title>Theme</title>

            <motion.path
                id={"moon"}
                // className={`${props.theme=="dark" ? "block" : "hidden"}`}
                d="M14.994,7.99a7,7,0,0,1-12.813,3.9,1,1,0,0,1,1.063-1.532,6.139,6.139,0,0,0,1.961.089,6.012,6.012,0,0,0,5.212-4.985,6.067,6.067,0,0,0-.065-2.274A1,1,0,0,1,11.9,2.182,6.985,6.985,0,0,1,14.994,7.99Z"
                style={{transformOrigin: "0px 0px 0px"}}
                animate={{y: resolvedTheme==='dark' ? 17 : 0}}
                y={17}
            />
            <motion.g
                id={"sun"}
                // className={` ${props.theme=="light" ? "block" : "hidden"}`}
                style={{transformOrigin: "0px 0px 0px"}}
                animate={{y: resolvedTheme==='light' ? 17 : 0}}
            >
                <circle cx="8.5" cy="8.5" r="3"></circle>
                <line x1="8.5" y1="1" x2="8.5" y2="2"></line>
                <line x1="13.803" y1="3.197" x2="13.096" y2="3.904"></line>
                <line x1="16" y1="8.5" x2="15" y2="8.5"></line>
                <line x1="13.803" y1="13.803" x2="13.096" y2="13.096"></line>
                <line x1="8.5" y1="16" x2="8.5" y2="15"></line>
                <line x1="3.197" y1="13.803" x2="3.904" y2="13.096"></line>
                <line x1="1" y1="8.5" x2="2" y2="8.5"></line>
                <line x1="3.197" y1="3.197" x2="3.904" y2="3.904"></line>
            </motion.g>
        </motion.svg>);
}