"use client"
import React, { useState } from 'react';
import Test from "@/components/test";

function Nav() {
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
            {/*<button onClick={toggleNavBar}*/}
            {/*        className="flex flex-col justify-center items-center pt-3">*/}
            {/*<span className={spanClass + ` ${isOpen ?*/}
            {/*    'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>*/}
            {/*</span>*/}
            {/*    <span className={spanClass + ` my-0.5 ${isOpen ?*/}
            {/*        'opacity-0' : 'opacity-100'}`}>*/}
            {/*</span>*/}
            {/*    <span className={spanClass + ` ${isOpen ?*/}
            {/*        '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>*/}
            {/*</span>*/}
            {/*</button>*/}

            <Test/>
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className="opacity-100 fill-current text-gray-500 stroke-current stroke-2 block">*/}
            {/*    <title>Menu</title>*/}
            {/*    <circle cx="12" cy="12" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(-24px) translateY(-24px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="24" cy="12" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(0px) translateY(-24px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="36" cy="12" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(24px) translateY(-24px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="36" cy="24" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(24px) translateY(0px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="36" cy="36" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(24px) translateY(24px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="24" cy="36" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(0px) translateY(24px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="12" cy="36" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(-24px) translateY(24px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <circle cx="12" cy="24" r="3" opacity="1" transform-origin="0px 0px"*/}
            {/*            style="transform: translateX(-24px) translateY(0px); transform-origin: 0px 0px;"></circle>*/}
            {/*    <rect x="21" y="21" width="39.94px" height="6px" rx="3" ry="3" opacity="1" transform-origin="0px 0px"*/}
            {/*          style="transform: translateX(-16.97px) translateY(0px); transform-origin: 0px 0px;"></rect>*/}
            {/*    <rect x="21" y="21" width="6px" height="39.94px" rx="3" ry="3" opacity="1" transform-origin="0px 0px"*/}
            {/*          style="transform: translateX(0px) translateY(-16.97px); transform-origin: 0px 0px;"></rect>*/}
            {/*</svg>*/}
        </>


    )


}

export default Nav;