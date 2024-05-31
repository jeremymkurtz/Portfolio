'use client'

import { motion , AnimatePresence} from "framer-motion"
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    // const router = typeof window !== 'undefined' ? useRouter() : undefined
    const pathname = usePathname();
    return (
        <AnimatePresence>
        <motion.div
          key={pathname}
           className="w-full h-full flex justify-center items-center"
            initial={{opacity:0, y: -20}}
            animate={{opacity:1, y: 0, transition: {ease: "easeInOut", delay:0.5, staggerChildren: 1, duration:0.5, type:'tween'}}}
            exit={{opacity:0, y: -20}} 
            >
          {children}
        </motion.div>
      </AnimatePresence>
        // <motion.div
        //     className="w-full h-full flex justify-center items-center"
        //     initial={{opacity:0, y: -20}}
        //     animate={{opacity:1, y: 0, transition: {ease: "easeInOut", delay:0.5, staggerChildren: 1, duration:0.5, type:'tween'}}}> 
        //     {children}
        // </motion.div>
);
}