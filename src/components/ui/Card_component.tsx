import { ReactElement } from "react";
import { DeleteIcon } from "../../icons/deleteIcon";
import { DocsIcon } from "../../icons/docsIcon";
import { ShareIcon } from "../../icons/ShareIcon";
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
        <div className={`px-4 py-4 bg-white-800 rounded-md border border-gray-200 max-w-64 min-h-80`}>
            <div className="flex justify-between">
                <div className="flex items-center gap-[5px] text-gray-500 text-xs">
                    <DocsIcon size='md' />
                    <p className="text-black">Project Ideas</p>
                </div>
                <div className="flex items-center gap-[5px] text-gray-500">
                    <ShareIcon size="md"/>
                    <DeleteIcon size="md"/>
                </div>
            </div>
            <div className="pt-4">
                <iframe 
                    className={`w-full h-full`}    
                    src="https://www.youtube.com/embed/-frNQkRz_IU?si=yLf5e__rvfA5UGez" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                >
                </iframe>
            </div>
            
        </div>
    );
}
{/* <div className="flex items-center font-bold">
                <h1>Future Projects</h1>
</div> */}