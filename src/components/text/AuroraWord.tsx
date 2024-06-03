import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import {useTheme} from "next-themes";


const COLORS_TOP = ["#0D47A1", "#1B5E20", "#4A148C", "#B71C1C"];
export  default function AuroraWord(props:{className?:string, word:string, children?:React.ReactNode}) {
  const color = useMotionValue(COLORS_TOP[0]);
  const {theme} = useTheme();
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);


  const gradientColor = theme === 'dark' ? '#F3F2F9' : '#606887';
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${gradientColor} 30%, ${color})`;

  return (
      <motion.div
          style={{
            backgroundImage,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          className={`-z-50 relative h-fit w-fit ${props.className ? props.className : ""}`}
      >
        <h2 className={"size-fit"}>{props.word}</h2>
        {props.children}

      </motion.div>
  );
};