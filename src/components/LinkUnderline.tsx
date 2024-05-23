import Link from "next/link";
import React from "react";

export default function LinkUnderline(props:{id?:string,children:React.ReactNode, href:string, useLink?:boolean, onClick?:()=>void}){
    return <div id={props.id ? props.id : undefined} className={"relative group w-fit"}>
        {props.useLink ? <Link href={props.href} onClick={props.onClick}>
            {props.children}
        </Link> :
            <a href={props.href}>{props.children} </a>}
        <span
            className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary dark:bg-primaryDark transition-all group-hover:w-full"></span>
    </div>;
}