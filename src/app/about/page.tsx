"use client"
import Image from "next/image";
import Headshot from "../../../public/Headshot.jpg";
export default function About() {
    return (
        <div id="about" className="flex flex-col h-full items-center mt-44 sm:mt-60 md:mt-0 md:flex-row-reverse md:justify-normal">
            <div id="about-right" className={"relative px-10 lg:w-1/4 lg:h-full"}>
                <Image src={Headshot} alt={"headshot"} className={"rounded-[48px] sm:rounded-3xl lg:w-[350px] lg:absolute lg:top-0 lg:right-0"}/>
            </div>
            <div id="about-left" className={"flex flex-col gap-2 pl-7 sm:pl-12 md:pl-24 lg:pl-52 w-full md:w-1/2 lg:w-3/4 md:pt-72"}>
                <h1 className="text-4xl font-semibold">About</h1>
                <p className="text-md">Hey my name is Jeremy. I am a computer science student at Worcester Polytechnic
                    Institute class of 2026. My goal in the future is to become a full stack developer with a focus on
                    front end. I am Indonesian American and have lived in Indonesia for twelve years then moved to the
                    U.S. in 2016. Some of my hobbies include badminton, video games, and manga.</p>
                <div className={"h-20"}/>
                <a href="resume" className={"underline"}>Resume</a>
                <a href={"/JMKurtz-CV.pdf"} target={"_blank"} rel="noopener noreferrer" className={"underline"}>Curriculum
                    Vitae</a>
            </div>

        </div>

    )
}