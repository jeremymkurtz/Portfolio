"use client"
import Image from "next/image";
import Headshot from "../../../public/Headshot.jpg";
import LinkUnderline from "@/components/LinkUnderline";
import WidenAnimator from "@/components/WidenAnimator";
export default function About() {
    return (
        <div id="about" className="flex flex-col h-full items-center mt-36 sm:mt-48 md:mt-0 md:flex-row-reverse md:items-start">
            <div id="about-right" className={"relative w-full px-7 sm:px-12 md:pr-0 md:w-1/2 lg:w-2/4 md:h-full"}>
                <Image src={Headshot} alt={"headshot"} className={" rounded-[48px] sm:w-full sm:rounded-3xl md:rounded-t-none md:rounded-br-none lg:w-[350px] md:absolute md:top-0 md:right-0"}/>
            </div>
            <div id="about-left" className={"font-inter flex flex-col gap-2 px-7 pt-7 sm:px-12 sm:pt-10 md:pl-24 md:pr-12 md:pt-32 lg:pt-52  lg:pl-24 xl:48 w-full lg:w-3/4 "}>
                <WidenAnimator text={"About"} indexes={[1,4]} cn={"text-4xl font-black uppercase"}/>
                <hr className={"border-[1.5px] border-primary dark:border-primaryDark"}/>
                <p className="text-md w-full xl:w-3/4">Hey my name is Jeremy. I am a computer science student at Worcester Polytechnic
                    Institute class of 2026. My goal in the future is to become a full stack developer with a focus on
                    front end. I am Indonesian American and have lived in Indonesia for twelve years then moved to the
                    U.S. in 2016. Some of my hobbies include badminton, video games, and manga.</p>
                <div id="Resume&CV" className={"flex flex-row gap-10"}>
                    <LinkUnderline href={"/resume"}>↓ Resume</LinkUnderline>
                    <LinkUnderline href={"/JMKurtz-CV.pdf"}>↓ Curriculum Vitae</LinkUnderline>
                </div>

            </div>

        </div>

    )
}