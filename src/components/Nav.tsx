"use client"
import {AnimatePresence, motion } from 'framer-motion';
import {useState} from "react";

const divVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 1 , rotate: 45},
};

const plusHorizontalVariants = {
    closed: {
        opacity: 1,
        width: 6,
        x: "calc(0% - 0px)", // Adjusted to keep the center at 21
        transition: {
            width: { duration: 0.25 },
            x: { duration: 0.25 }
        }
    },
    opened: {
        opacity: 1,
        width: 30,
        x: "calc(0% - 12px)", // Adjusted to keep the center at 21
        transition: {
            width: { duration: 0.25 },
            x: { duration: 0.25 }
        }
    },
};

const plusVerticalVariants = {
    closed: {
        opacity: 1,
        height: 6,
        y: "calc(0% - 0px)",
        transition: {
            height: { duration: 0.25 },
            y: { duration: 0.25 }
        }
    },
    opened: {
        opacity: 1,
        height: 30,
        y: "calc(0% - 12px)",
        transition: {
            height: { duration: 0.25 },
            y: { duration: 0.25 }
        }
    },
};



function Nav(props:{size:number, isOpen: boolean, toggle: () => void}) {
   const [isHovered, setIsHovered] = useState(false);


    return(
        <AnimatePresence>
            <motion.div
                className={"absolute size-fit z-50 m-5 onHover: cursor-pointer"}
                variants={divVariants}
                onClick={props.toggle}
                animate={props.isOpen ? "opened" : "closed"}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={props.size} height={props.size}
                            className="opacity-100 fill-none stroke-current text-gray-500 stroke-2 block hover: cursor-pointer">
                    <title>Menu</title>
                    {/*top left*/}
                    <motion.circle
                        cx="12"
                        cy="12"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: -24, y: -24},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={props.isOpen ? "hidden" : "visible"}
                    />
                    {/*top middle*/}
                    <motion.circle
                        cx="24"
                        cy="12"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: 0, y: -24},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={isHovered || props.isOpen ? "hidden" : "visible"}
                    />
                    {/*top right*/}
                    <motion.circle
                        cx="36"
                        cy="12"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: 24, y: -24},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={props.isOpen ? "hidden" : "visible"}
                    />
                    {/*middle left*/}
                    <motion.circle
                        cx="12"
                        cy="24"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: -24, y: 0},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={isHovered || props.isOpen ? "hidden" : "visible"}
                    />
                    {/*middle right*/}
                    <motion.circle
                        cx="36"
                        cy="24"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: 24, y: 0},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={isHovered || props.isOpen ? "hidden" : "visible"}
                    />

                    {/*bot left*/}
                    <motion.circle
                        cx="12"
                        cy="36"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: -24, y: 24},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={props.isOpen ? "hidden" : "visible"}
                    />
                    {/*bot middle*/}
                    <motion.circle
                        cx="24"
                        cy="36"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: 0, y: 24},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={isHovered || props.isOpen ? "hidden" : "visible"}
                    />
                    {/*bottom right*/}
                    <motion.circle
                        cx="36"
                        cy="36"
                        r="3"
                        variants={{
                            hidden: {opacity: 0, x: 24, y: 24},
                            visible: {opacity: 1, x: 0, y: 0},
                        }}
                        animate={props.isOpen ? "hidden" : "visible"}
                    />
                    {/*horizontal*/}
                    <motion.rect
                        x="21"
                        y="21"
                        width="6px"
                        height="6px"
                        rx="3"
                        ry="3"
                        variants={plusHorizontalVariants}
                        animate={props.isOpen || isHovered ? "opened" : "closed"}
                    />
                    {/*vertical*/}
                    <motion.rect
                        id = "test"
                        x="21"
                        y="21"
                        width="6px"
                        height="6px"
                        rx="3"
                        ry="3"
                        variants={plusVerticalVariants}
                        animate={props.isOpen || isHovered ? "opened" : "closed"}
                    />
                </motion.svg>
            </motion.div>

        </AnimatePresence>
    );
}

export default Nav;