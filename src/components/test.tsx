import {AnimatePresence, motion } from 'framer-motion';

const circleVariants = {
  hidden: { opacity: 0, x: -24, y: -24 },
  visible: { opacity: 1, x: 0, y: 0 },

};

const divVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 1 , rotate: 45},
};

const plusHorizontalVariants = {
    closed: {
        opacity: 1,
        width: 6,

    },
    opened: {
        opacity: 1,
        width: 30,
        x: "calc(32% - 28px)"
    },
};
const plusVerticalVariants = {
    closed: {
        opacity: 1,
        height: 6,

    },
    opened: {
        opacity: 1,
        height: 30,
        y: "calc(32% - 28px)"
    },
};


const AnimatedSVG = () => (
    <AnimatePresence>
        <motion.div
            className={"size-fit p-5"}
            variants={divVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            transition={{repeat: Infinity, repeatType: "mirror", repeatDelay: 3}}>
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"
                        className="opacity-100 fill-none stroke-current text-gray-500 stroke-2 block">
                <title>Menu</title>
                <motion.circle
                    cx="12"
                    cy="12"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="24"
                    cy="12"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="36"
                    cy="12"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="36"
                    cy="24"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="36"
                    cy="36"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="24"
                    cy="36"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="12"
                    cy="36"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="12"
                    cy="24"
                    r="3"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                />
                <AnimatePresence>
                    <motion.rect
                        x="21"
                        y="21"
                        height="6px"
                        rx="3"
                        ry="3"
                        variants={plusHorizontalVariants}
                        initial="closed"
                        animate="opened"
                        transition={{repeat: Infinity, repeatType: "mirror", repeatDelay: 3}}
                    />
                </AnimatePresence>
                <motion.rect
                    x="21"
                    y="21"
                    width="6px"
                    height="30px"
                    rx="3"
                    ry="3"
                    variants={plusVerticalVariants}
                    initial="closed"
                    animate="opened"
                    transition={{repeat: Infinity, repeatType: "mirror", repeatDelay: 3}}
                />
            </motion.svg>
        </motion.div>

    </AnimatePresence>
);

export default AnimatedSVG;