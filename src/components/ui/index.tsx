"use client";
import { useMenuContext } from "@/contexts/MenuContext";
import Menu from "@/components/ui/navigation/Menu";
import Nav from "@/components/ui/navigation/header/Nav";
import ThemeToggle from "@/components/ui/navigation/header/ThemeToggle";
import Logo from "@/components/ui/navigation/header/logo";
import AuroraIcon from "@/components/AuroraIcon";
import {useAuroraContext} from "@/contexts/AuroraContext";
import UseLocalStorage from "@/hooks/useLocalStorage";


import React, { useEffect, useState } from "react";
import {useTheme} from "next-themes";

const UserInterface = () => {
    const { toggleMenu, menuIsOpen } = useMenuContext();
    const { AuroraFound,toggleAurora } = useAuroraContext();
    const [mounted, setMounted] = useState(false);
    const {setTheme} = useTheme();
    useEffect(() => {
        // This will run after the component has mounted
        setMounted(true);
    }, []);

    const handleAuroraClick = () => {
        setTheme("dark");
        toggleAurora();
    }

    return (
        <>
            <header className={"fixed z-50 top-6 sm:top-12 lg:top-24 left-0 right-0"}>
                <div id={"header content"} className={"flex flex-row px-7 sm:px-12 md:px-24 justify-between"}>
                    <div id={"left"} className={"w-fit flex flex-row items-center justify-content space-x-6"}>
                        <Logo/>
                        {mounted && AuroraFound ? <AuroraIcon onClick={() => handleAuroraClick}/> : null}
                    </div>
                    <div id={"right"} className={"w-fit flex flex-row items-center justify-content space-x-6"}>
                        <ThemeToggle size={20}/>
                        <Nav size={40} toggle={toggleMenu} isOpen={menuIsOpen}/>
                    </div>
                </div>
            </header>
            <Menu isOpen={menuIsOpen} toggle={toggleMenu}/>
        </>
    );
};

export default UserInterface;