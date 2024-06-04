import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
                            number,
                            className,
                        }: {
    number?: number;
    className?: string;
}) => {
    const meteors = new Array(number || 20).fill(true);
    return (
        <>
            <div className={"fixed top-0 left-0 w-full h-full overflow-hidden"}>


            {meteors.map((el, idx) => (
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_0_1px_#60688710] dark:shadow-[0_0_0_1px_#F3F2F910] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-primary dark:before:from-primaryDark before:to-transparent",
                        className
                    )}
                    style={{
                        top: 0,
                        left: Math.floor(Math.random() * (50 - -50) + -50) + "%",
                        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
                    }}
                ></span>
            ))}
            </div>
        </>
    );
};
