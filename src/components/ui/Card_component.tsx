import { ReactElement } from "react";

type sizeVaraint = "sm" | "md" | "lg";

interface Cardprops{
    size: sizeVaraint,
    className?:string,
    children?: ReactElement
}

const defaultStyles = "p2 rounded-md border-gray-300 font-black shadow-md bg-white-800 ";

const sizeStyle = {
    "sm": "px-2 py-2",
    "md": "px-2 py-4",
    "lg": "px-2 py-6"
}
export function Card(props:Cardprops){
    console.log(props.className);
    
    return (
        <div className={`${defaultStyles} ${sizeStyle[props.size]} ${props.className}`}>
            {props.children}
        </div>
    );
}