"use client";
import { useState } from "react";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className={"fixed z-50 top-12 left-0 right-0"}>
                <div id={"header content"} className={"flex flex-row px-20 justify-between"}>
                    <div id={"left"} className={"flex flex-row"}>
                        <Nav size={40} toggle={toggle} isOpen={isOpen}/>
                    </div>
                    <div id={"right"} className={"flex flex-row"}>
                        <ThemeToggle size={30}/>
                    </div>
                </div>
            </header>
            <Menu isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default Navigation;