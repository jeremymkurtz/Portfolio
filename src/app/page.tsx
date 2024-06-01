"use client"
import { FlipWords } from "@/components/text/FlipWords";
import PageWrapper from "@/components/PageWrapper";
import ShinyButton from "@/components/ui/button/ShinyButton";
import LinkUnderline from "@/components/text/LinkUnderline";
import { SlArrowRightCircle } from "react-icons/sl";

const RightArrow = <SlArrowRightCircle className="inline" />


export default function Home() {
  const roles = ["Full Stack Dev", "designer", "student", "badminton player", "gamer", "manga reader"]
  return (
    <PageWrapper >
   <div className="text-left font-black font-Anybody uppercase flex flex-col gap-4">
      <div>
        <h1 className="text-4xl font-black font-Anybody uppercase"> Hey my name is Jeremy,</h1>
        <h1 className="text-4xl"> I am a<FlipWords words={roles} /></h1>
        <div className="flex flex-row gap-4">
          <LinkUnderline href="/projects" cn="font-jakarta">{RightArrow} See my work</LinkUnderline>
          <LinkUnderline href="/about" cn="font-jakarta">{RightArrow} More about me</LinkUnderline>
       </div>
      </div>
       
       
      <ShinyButton cn="w-fit font-jakarta">I don't do anything yet</ShinyButton>
   </div>
   
   </PageWrapper>
  );
}
