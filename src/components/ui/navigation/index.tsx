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
            console.log(theme);
        }
        else{
            setTheme("light");
            console.log(theme);
        }
    };
    return (
        <>
            <header className={"fixed z-50 top-12 left-0 right-0"}>
                <div id={"header content"} className={"flex flex-row px-20 justify-between"}>
                    <div id={"left"} className={"flex flex-row"}>
                        <Nav size={40} toggle={toggle} isOpen={isOpen}/>
                    </div>
                    <div id={"right"} className={"flex flex-row"}>
                        <LightDark size={30} toggle={toggleTheme} theme={theme}/>
                    </div>
                </div>




            </header>
            <Menu isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default Navigation;