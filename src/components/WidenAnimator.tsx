import React from "react";

export default function WidenText(props:{indexes:number[], text:string, cn?:string, animate?: boolean}) {
function getIndexes() {
    let indexes:React.ReactNode[] = [];
    for (let i = 0; i < props.text.length; i++) {
        if(props.indexes.includes(i)){
            indexes.push(<h1 className={`h-fit ${props.animate ? "widenTextAnimate" : "widenText"}`}>{props.text[i]}</h1>);
        } else {
            indexes.push(props.text[i]);
        }
    }
    return indexes;
}
    return <div className={`flex flex-row h-fit font-Anybody w-fit ${props.animate ? "parentWidenTextAnimate" : ""} ${props.cn ? props.cn : ""}`}>{getIndexes()}</div>;
}