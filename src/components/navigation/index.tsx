"use client";
import { useState } from "react";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import LightDark from "@/components/light-dark";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    };
    return (
        <>
            <header>
                <Nav size={40} toggle={toggle} isOpen={isOpen} />
                <LightDark toggle={toggleTheme} theme={theme}/>
            </header>
            <Menu isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default Navigation;