"use client"
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

export default function ThemeToggle(props:{size:number}){
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const theme= localStorage.getItem("theme");
        if(theme === "dark"){
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width={props.size} height={props.size}
                    className="block icons-style mini-icons cursor-pointer" onClick={() => {
            setDarkMode(!darkMode);
        }}
                    stroke={`${darkMode ? "#FFFFFF" : "#000000"}`}
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
                animate={{y: darkMode ? 17 : 0}}
                y={17}
            />
            <motion.g
                id={"sun"}
                // className={` ${props.theme=="light" ? "block" : "hidden"}`}
                style={{transformOrigin: "0px 0px 0px"}}
                animate={{y: !darkMode ? 17 : 0}}
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
        </motion.svg>
    );
}