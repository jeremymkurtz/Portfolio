"use client"
export default function About() {
    return (
        <div id="about" className="flex flex-row-reverse">
            <div id="about-right" className={"bg-white flex w-1/2"}>

            </div>
            <div id="about-left" className={"flex flex-col gap-2 w-fit sm:w-1/3"}>
                <h1 className="text-3xl font-semibold">About</h1>
                <p className="text-lg">Hey my name is Jeremy. I am a computer science student at Worcester Polytechnic
                    Institute class of 2026. My goal in the future is to become a full stack developer with a focus on
                    front end. I am Indonesian American and have lived in Indonesia for twelve years then moved to the
                    U.S. in 2016. Some of my hobbies include badminton, video games, and manga.</p>
                <a href="resume" className={"underline"}>Resume</a>
                <a href={"/JMKurtz-CV.pdf"} target={"_blank"} rel="noopener noreferrer" className={"underline"}>Curriculum
                    Vitae</a>
            </div>

        </div>

    )
}