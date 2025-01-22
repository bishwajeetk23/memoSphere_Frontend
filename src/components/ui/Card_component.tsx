import { ReactElement } from "react";
import { PlusIcon } from "../../icons/PlusIcon"; 
import { DeleteIcon } from "../../icons/deleteIcon";
type sizeVaraint = "sm" | "md" | "lg";

interface Cardprops{
    size: sizeVaraint,
    className?:string,
    children?: ReactElement
}

const sizeStyle = {
    "sm": "px-2 py-2",
    "md": "px-2 py-4",
    "lg": "px-2 py-6"
}
export function Card(props:Cardprops){
    return (
        <div className={`px-2 py-4 bg-white-800 rounded-md border border-gray-200 max-w-64 min-h-80`}>
            <div className="flex justify-between">
                <div className="flex items-center gap-[5px] text-gray-500 text-xs">
                    <PlusIcon size='md' />
                    <p className="text-black">Project Ideas</p>
                </div>
                <div className="flex items-center gap-[5px] text-gray-500">
                    <DeleteIcon size="md"/>
                    <PlusIcon size="md"/>
                </div>
            </div>
            <div className="flex items-center font-bold">
                <h1>Future Projects</h1>
            </div>
        </div>
    );
}