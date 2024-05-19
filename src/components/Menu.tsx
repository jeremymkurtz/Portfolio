"use client"

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

function MenuContent() {
    return (
        <>
            {NavLink.map((link, index) => {
                return (
                    <Link href={link.href} key={`menu-content`+index}>
                        {link.text}
                    </Link>
                )
            })}
        </>
    )
}

export default function Menu(props:{isMenuOpen: boolean}) {
    return (
        <div id="menu" className={`z-20 top-0 left-0 fixed h-screen w-full pointer-events-auto ${props.isMenuOpen ? 'block' : 'hidden'}`}>
            <div id="menu-content" className="relative flex flex-col justify-center h-full overflow-hidden">
                <MenuContent />
            </div>
        </div>
    )
}