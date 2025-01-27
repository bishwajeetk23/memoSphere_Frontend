import { DeleteIcon } from "../../icons/deleteIcon";
import { DocsIcon } from "../../icons/docsIcon";
import { ShareIcon } from "../../icons/ShareIcon";
type typeVaraint = "twitter" | "youtube";

interface Cardprops{
    title: string,
    link: string,
    type: typeVaraint
}

export function Card({title,link,type}:Cardprops){
    // TODO: find cleaner way to embed the twitter and youtube link
    // if(type === "youtube")console.log(link.replace("watch","embed").replace("?v=","/"));
    
    return (
        <div>
            <div className={`px-4 py-4 bg-white-800 rounded-md border border-gray-200 max-w-72 min-h-48 min-w-72`}>
                <div className="flex justify-between">
                    <div className="flex items-center gap-[5px] text-gray-500 text-xs">
                        <DocsIcon size='md' />
                        <p className="text-black">{title}</p>
                    </div>
                    <div className="flex items-center gap-[5px] text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon size="md"/>
                        </a>
                        <DeleteIcon size="md"/>
                    </div>
                </div>
                <div className="pt-4">
                    {
                        type === "youtube" &&  <iframe 
                            className={`w-full h-auto`}    
                            src={link.replace("watch","embed").replace("?v=","/")} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        >
                        </iframe> 
                        
                    }
                    {
                        type === "twitter" && <blockquote className={`w-full h-auto twitter-tweet`}  >
                            <a href={link.replace("x.com","twitter.com")}></a>
                        </blockquote> 
                    }
                </div>
            </div>
        </div>
        
    );
}




