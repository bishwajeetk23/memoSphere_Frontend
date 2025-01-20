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
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}
const sizeStyles = {
    "sm":"p-2",
    "md":"p-4",
    "lg":"p-6"
}
const defaultStyles = "rounded-md p-4";
export const Button = (props:ButtonProps)=>{
    return <button 
    className={`${varientStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}
    onClick={props.onclick}
    >
        {props.text}
    </button>
}