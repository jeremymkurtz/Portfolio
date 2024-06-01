"use client"

import React, { MouseEvent } from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";
import {SlPhone,} from "react-icons/sl";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import Link from "next/link";

export const Example = () => {
  return (
    <div className="h-full w-full">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-primary dark:divide-primaryDark border border-primary dark:border-primaryDark">
      <div className="grid grid-cols-1 grid-rows-2 divide-y divide-primary dark:divide-primaryDark md:grid-cols-2 md:grid-rows-1 md:divide-y-0 md:divide-x">
        <LinkBox Icon={SiGmail} href="mailto:kurtzjeremy126@gmail.com" />
        <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/jeremymkurtz/" />
      </div>
      <div className="grid grid-cols-1 grid-rows-2 divide-y divide-primary dark:divide-primaryDark md:grid-cols-2 md:grid-rows-1 md:divide-y-0 md:divide-x">
        <LinkBox Icon={SiGithub} href="https://www.github.com/jeremymkurtz" />
        <LinkBox Icon={SlPhone} href="tel:+1(312)718-4905" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <Link
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-primary dark:bg-primaryDark text-white dark:text-backgroundDark"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </Link>
  );
};