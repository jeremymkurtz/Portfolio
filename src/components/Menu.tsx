"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";

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


function MenuContent(props:{isOpen: boolean, toggle: () => void}) {
    const [animationState, setAnimationState] = useState({ y: -50, opacity: 0 });

    useEffect(() => {
        setTimeout(() => { // Delay the content animation
            if (props.isOpen) {
                setAnimationState({ y: 0, opacity: 1 });
            } else {
                setAnimationState({ y: -50, opacity: 1 });
            }
        }, props.isOpen ? 300 : 0); // Delay is 300ms when opening, no delay when closing
    }, [props.isOpen]);

    return (
        <>
            {NavLink.map((link, index) => {
                return (
                    <div className={"overflow-hidden"} key={index}>
                        <motion.div
                            initial={{y: -50, opacity: 1}}
                            animate={animationState}
                            exit={{y: -50, opacity: 1}}
                            transition={{type: 'spring', stiffness: 100, damping: 20, delay: index * 0.05, duration: 0.1}}
                        >
                            <Link href={link.href} onClick={props.toggle}>
                                {link.text}
                            </Link>
                        </motion.div>
                    </div>
                )
            })}
        </>
    )
}

export default function Menu(props: { toggle: () => void, isOpen: boolean }) {
    return (
        <motion.div
            id="menu"
            className={`z-10 top-0 left-0 fixed h-screen w-full pointer-events-auto block backdrop-blur-sm`}
            animate={{ opacity: props.isOpen ? 1 : 0 ,background: props.isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"}}
            transition={{ duration: 0.3}} // Blur happens first when opening, last when closing
        >
            <div id="menu-content"
                 className="relative flex flex-col items-center justify-center h-full overflow-hidden">
                <MenuContent isOpen={props.isOpen} toggle={props.toggle}/>
            </div>
        </motion.div>
    )
}
