import react from "react";
export default function PageWrapper(props: {center?:boolean, children: react.ReactNode}){
    return (
        <div className = {`flex flex-col w-full h-full px-7 pt-16 sm:px-12 sm:pt-24 md:pt-36 md:px-24 ${props.center ? "justify-center items-center" : ""}`}>
            {props.children}
        </div>
    )
}