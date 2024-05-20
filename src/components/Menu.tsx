"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";

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
  open: { y: 0, opacity: 1 },
  closed: { y: -30, opacity: 1 },
};
function MenuContent(props:{isOpen: boolean, toggle: () => void}) {
    return (
        <>
            {NavLink.map((link, index) => {
                return (
                    <div className={"overflow-hidden"} key={index}>
                        <motion.div
                            initial="closed"
                            animate={props.isOpen ? "open" : "closed"}
                            variants={variants}
                            transition={{type: 'spring', stiffness: 100, damping: 20, delay: props.isOpen ? (index * 0.1 + 0.4) : index * 0.1 , duration: 0.01}}
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
            className={`z-20 top-0 left-0 fixed h-screen w-full pointer-events-auto ${props.isOpen ? 'block' : 'hidden'}`}
            style={{WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)"}}
            animate={{ opacity: props.isOpen ? 1 : 0 }}
            transition={{ duration: props.isOpen ? 0.4 : 1.2, onComplete: handleAnimationComplete}} // Blur happens first when opening, last when closing
        >
            <div id="menu-content"
                 className="relative flex flex-col items-center justify-center h-full overflow-hidden">
                <MenuContent isOpen={props.isOpen} toggle={props.toggle}/>
            </div>
        </motion.div>
    )
}