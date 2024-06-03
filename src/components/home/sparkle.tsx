import React from 'react';
import { motion } from 'framer-motion';

export default function Sparkle(props:{children?:React.ReactNode}) {
        // Generate a random number of stars
        const numStars = 30;

        // Create an array of stars
        const stars = Array.from({length: numStars}, (_, i) => i);

        return (
            <div className="relative w-fit">
                {stars.map((star) => {
                    // Generate random values for the size, duration, delay, and position of each star
                    const size = Math.random() * 5 + 0.1;
                    const duration = Math.random() * 2 + 1;
                    const delay = Math.random() * 2;
                    const initialY = Math.random() * 100;
                    const finalY = initialY - 100;

                    return (
                        <motion.div
                            key={star}
                            className={"bg-primary dark:bg-primaryDark rounded"}
                            style={{
                                position: 'absolute',
                                top: `${Math.random() * 65}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                            }}
                            initial={{y: `${initialY}%`, opacity: 1}}
                            animate={{y: `${finalY}%`, opacity: 0}}
                            transition={{duration: duration, delay: delay, repeat: Infinity, repeatType: "reverse"}}
                        />
                    );
                })}
                {props.children}
            </div>
        );
    }
