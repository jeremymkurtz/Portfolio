import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export  default function Aurora(props:{className?:string, children?:React.ReactNode, showStars?:boolean}) {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
      <motion.section
          style={{
            backgroundImage,
          }}
          className={`-z-50 fixed top-0 left-0 w-full h-full ${props.className ? props.className : ""}`}
      >
        {props.children}
        <div className="absolute inset-0 z-0">

          {props.showStars ? <Canvas flat linear>

            <Stars radius={50} count={2500} factor={4} fade speed={2} />

          </Canvas> : null}

        </div>
      </motion.section>
  );
};