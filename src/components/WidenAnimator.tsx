import React from "react";

export default function WidenAnimator(props:{indexes:number[], text:string, cn?:string}) {
function getIndexes() {
    let indexes:React.ReactNode[] = [];
    for (let i = 0; i < props.text.length; i++) {
        if(props.indexes.includes(i)){
            indexes.push(<h1 className={"h-fit wide"}>{props.text[i]}</h1>);
        } else {
            indexes.push(props.text[i]);
        }
    }
    return indexes;
}
    return <div className={`trigger flex flex-row h-fit font-Anybody w-fit ${props.cn}`}>{getIndexes()}</div>;
}