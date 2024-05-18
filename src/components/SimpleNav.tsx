"use client"
import React, { useState } from 'react';

function SimpleNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    const NavLink = [
            {
                href: "/",
                text: "Home"
            },
            {
                href: "/about",
                text: "About"
            },
            {
                href: "/projects",
                text: "Projects"
            },
            {
                href: "/contact",
                text: "Contact"
            }
            ]

    const spanClass = "bg-white block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm"
    return (
        <>
            <button onClick={toggleNavBar}
                    className="flex flex-col justify-center items-center pt-3">
            <span className={spanClass + ` ${isOpen ?
                'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
            </span>
                <span className={spanClass + ` my-0.5 ${isOpen ?
                    'opacity-0' : 'opacity-100'}`}>
            </span>
                <span className={spanClass + ` ${isOpen ?
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
            </span>
            </button>
        </>


    )


}

export default SimpleNav;