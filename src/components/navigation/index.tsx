"use client";
import { useState } from "react";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Nav size={40} toggle={toggle} isOpen={isOpen} />
            <Menu isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default Navigation;