import { ReactElement } from "react";
type varients = "primary" | "secondary";
export interface ButtonProps {
    variant :varients;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onclick :()=> void;
}

const varientStyles = {
    "primary": "bg-purple-600 text-white-300",
    "secondary": "bg-purple-300 text-purple-600"
}
const sizeStyles = {
    "sm":"px-2 py-2",
    "md":"px-4 py-2",
    "lg":"px-6 py-2"
}
const defaultStyles = "rounded-md p4 outline-none cursor-pointer flex items-center gap-2";
export const Button = (props:ButtonProps)=>{
    return (<span>
                <button 
                    className={`${varientStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
                    onClick={props.onclick}
                >
                    {props.startIcon?props.startIcon:null}
                    {props.text}
                    {props.endIcon?props.startIcon:null}
                </button>
        </span>
    );
}