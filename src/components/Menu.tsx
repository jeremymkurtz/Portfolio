"use client"

import {motion} from "framer-motion";
import Link from "next/link";

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
  closed: { y: -30, opacity: 0 },
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
                            transition={{type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1, duration: 0.4}}
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
            className={`z-20 top-0 left-0 fixed h-screen w-full pointer-events-auto block backdrop-blur opacity-0`}
            animate={{ opacity: props.isOpen ? 1 : 0 ,background: props.isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"}}
            transition={{ duration: 0.2}} // Blur happens first when opening, last when closing
        >
            <div id="menu-content"
                 className="relative flex flex-col items-center justify-center h-full overflow-hidden">
                <MenuContent isOpen={props.isOpen} toggle={props.toggle}/>
            </div>
        </motion.div>
    )
}
