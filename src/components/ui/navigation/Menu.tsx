"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import LinkUnderline from "@/components/LinkUnderline";

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




const variants = {
  open: { y: 0, opacity: 1},
  closed: { y: -100 , opacity: 0},
};
function MenuContent(props:{isOpen: boolean, toggle: () => void}) {
    return (
        <>
            {NavLink.map((link, index) => {
                return (
                    <div id={`page`+index} className={"h-auto w-fit overflow-hidden"} key={index}>
                        <motion.div
                            initial="closed"
                            animate={props.isOpen ? "open" : "closed"}
                            variants={variants}
                            transition={{type: 'spring', stiffness: 100, damping: 20, delay: props.isOpen ? (index * 0.1 + 0.4) : index * 0.1 , duration: 0.01}}
                        >
                            <LinkUnderline href={link.href} useLink={true}>
                                <text className="text-sm">0{index}</text>
                                {link.text}
                            </LinkUnderline>
                        </motion.div>
                    </div>
                )
            })}
        </>
    )
}

export default function Menu(props: { toggle: () => void, isOpen: boolean }) {
    const [display, setDisplay] = React.useState('hidden');

    const handleAnimationComplete = () => {
        if (!props.isOpen) {
            setDisplay('hidden');
        }
    };

    React.useEffect(() => {
        if (props.isOpen) {
            setDisplay('block');
        }
    }, [props.isOpen]);


    return (
        <motion.div
            id="menu"
            className={`flex text-primary dark:text-primaryDark z-20 top-0 left-0 fixed h-full w-full pointer-events-auto items-center sm:justify-center md:justify-start ${display}`}
            style={{WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)"}}
            animate={{ opacity: props.isOpen ? 1 : 0 ,background: props.isOpen ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)"}} //DO NOT DELETE BACKGROUND INTRODUCES BLIP
            transition={{ duration: props.isOpen ? 0.4 :1.2, onComplete: handleAnimationComplete }}
            onClick={props.toggle}
        >
            <div id="menu-content"
                 className="relative flex flex-col  h-fit size-fit overflow-hidden justify-center
                 ml-10  text-6xl text-left md:ml-[20%] md:start-0 lg:text-7xl">
                <nav>
                    <MenuContent isOpen={props.isOpen} toggle={props.toggle}/>
                </nav>
            </div>
        </motion.div>
    )
}