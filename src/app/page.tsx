"use client"
import { FlipWords } from "@/components/text/FlipWords";
import PageWrapper from "@/components/PageWrapper";
import ShinyButton from "@/components/ui/button/ShinyButton";
import LinkUnderline from "@/components/text/LinkUnderline";
import { SlArrowRightCircle } from "react-icons/sl";
import { useAuroraContext } from "@/contexts/AuroraContext";
import Sparkle from "@/components/home/sparkle";
import {useTheme} from "next-themes";
import SpringModal from "@/components/ui/modal";
import {useState} from "react";
import AuroraIcon from "@/components/AuroraIcon";

const RightArrow = <SlArrowRightCircle className="inline" />


export default function Home() {
  const roles = ["Front End", "Back End", "Designer"];

  const {AuroraOn, toggleAurora, handleFoundAurora} = useAuroraContext();

    const [modalOpen, setModalOpen] = useState(false);
    const {setTheme} = useTheme();
    const handleAuroraClick = () => {
        setTheme("dark");
        toggleAurora();
        if(!AuroraOn) setModalOpen(true);
        handleFoundAurora();
    }
    const handleModalCancel = () => {
        setModalOpen(false);
        toggleAurora();
    }
  return (
    <>
        <PageWrapper >
      
   <div className="text-left font-black font-Anybody flex flex-col gap-4 justify-center sm:items-center">
      <div className="w-full uppercase justify-center items-center text-3xl sm:text-4xl md:text-5xl">

              <h1 className="text-balance flex flex-col lg:flex-row w-fit"> Hey my name
                  <div className={"pl-0 lg:pl-4 flex flex-row"}> is Jeremy <Sparkle><div className="hover:cursor-pointer" onClick={handleAuroraClick}>,</div></Sparkle></div></h1>
        <div className="mx-auto">
            I am a
          <FlipWords words={roles} className="pl-2 md:pl-3 w-fit"/>
        </div>
       
        <div className="flex flex-row gap-4 text-sm sm:text-md md:text-lg">
          <LinkUnderline href="/projects" cn="font-jakarta">{RightArrow} See my work</LinkUnderline>
          <LinkUnderline href="/about" cn="font-jakarta">{RightArrow} More about me</LinkUnderline>
       </div>
      </div>
       

      <ShinyButton className="w-fit h-fit font-jakarta"><h3 className={"text-balance flex"}>{`I don't do anything, but something else might?`}</h3></ShinyButton>
       <SpringModal
           isOpen={modalOpen}
           setIsOpen={setModalOpen}
           handleModalClose={handleModalCancel}
           AuroraMode={true}
           icon={<AuroraIcon size={40} className={"dark:fill-indigo-600"} className2={"dark:fill-background"}/>}
            title={"You Found Aurora Mode!"}
           description={<p className={"font-medium font-jakarta inline"}>If you want to return back to either light or dark
               mode simply press on <i className={"font-black"}>Nah, go back</i> or the comma on the home screen again. Alternatively you can press on the <AuroraIcon size={30} inline={true} /> icon on the top left corner of the screen.
               Otherwise simply tap on <i className={"font-black"}>Understood!</i> </p>}
          />
   </div>

        </PageWrapper>
    </>
  );
}
