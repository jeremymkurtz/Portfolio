import { motion } from "framer-motion";
import React, {ReactNode} from "react";

function ShinyButton(props:{cn?:string, children: ReactNode }) {
    return (
        <motion.button
            initial={{ "--x": "100%", scale: 1 } as any} // Its not broken
            animate={{ "--x": "-100%" } as any} // Its not broken
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
            className={`px-6 py-2 rounded-md relative dark:radial-gradient ${props.cn ? props.cn : ""}`} //radial-gradient
        >
      <span className={`text-primary dark:text-primaryDark tracking-wide font-Anybody block relative linear-mask `}>
        {props.children}
      </span>
            <span className="block absolute inset-0 rounded-md p-[2px] linear-overlay" />
        </motion.button>
    );
};

export default ShinyButton;