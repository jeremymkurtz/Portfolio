"use client"
import { FlipWords } from "@/components/text/FlipWords";
import PageWrapper from "@/components/PageWrapper";
import ShinyButton from "@/components/ui/button/ShinyButton";
import LinkUnderline from "@/components/text/LinkUnderline";
import { SlArrowRightCircle } from "react-icons/sl";

const RightArrow = <SlArrowRightCircle className="inline" />


export default function Home() {
  const roles = ["Front End", "Back End", "Designer"]
  return (
    <PageWrapper >
   <div className="text-left font-black font-Anybody uppercase flex flex-col gap-4 justify-center sm:items-center">
      <div className="justify-center items-center">
        <h1 className="text-4xl font-black font-Anybody uppercase text-balance"> Hey my name is Jeremy,</h1>
        <div className="flex flex-row w-fit">
          <h1 className="text-4xl mr-2 w-fit">I am a </h1>
          <FlipWords words={roles} className="text-4xl w-fit"/>
        </div>
       
        <div className="flex flex-row gap-4">
          <LinkUnderline href="/projects" cn="font-jakarta">{RightArrow} See my work</LinkUnderline>
          <LinkUnderline href="/about" cn="font-jakarta">{RightArrow} More about me</LinkUnderline>
       </div>
      </div>
       
       
      <ShinyButton cn="w-fit font-jakarta"><h3>I dont do anything yet</h3></ShinyButton>
   </div>
   
   </PageWrapper>
  );
}
