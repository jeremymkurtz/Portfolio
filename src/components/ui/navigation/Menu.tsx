"use client"

import {motion} from "framer-motion";
import React from "react";
import Link from "next/link";
import WidenText from "@/components/WidenAnimator";

const NavLink = [
    {
        href: "/",
        text: <WidenText text={"Home"} indexes={[1]} animate={true} />,

    },
    {
        href: "/projects",
        text: <WidenText text={"Work"} indexes={[2]} animate={true} />
    },
    {
        href: "/about",
        text: <WidenText text={"About"} indexes={[1, 4]} animate={true}/>
    },
    {
        href: "/contact",
        text: <WidenText text={"Contact"} indexes={[5]} animate={true}/>
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

                            <Link href={link.href} onClick={props.toggle}>
                                <div className="flex flex-row">
                                    <h2 className="text-sm font-bold bottom-[8px] md:bottom-[7.5px] self-end relative">0{index}</h2>
                                    {link.text}
                                </div>
                            </Link>
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
            className={`flex font-Anybody font-black uppercase text-primary dark:text-primaryDark z-20 top-0 left-0 fixed h-full w-full pointer-events-auto items-center sm:justify-center md:justify-start ${display}`}
            style={{WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)"}}
            animate={{ opacity: props.isOpen ? 1 : 0 ,background: props.isOpen ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)"}} //DO NOT DELETE BACKGROUND INTRODUCES BLIP
            transition={{ duration: props.isOpen ? 0.4 :1.2, onComplete: handleAnimationComplete }}
            onClick={props.toggle}
        >
            <div id="menu-content"
                 className="relative flex flex-col  h-fit size-fit overflow-hidden justify-center
                 px-7 text-6xl text-left md:ml-[20%] md:start-0 lg:text-7xl">
                <nav>
                    <MenuContent isOpen={props.isOpen} toggle={props.toggle}/>
                </nav>
            </div>
        </motion.div>
    )
}