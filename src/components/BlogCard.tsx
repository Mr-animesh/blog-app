import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
    }: BlogCardProps) => {
    return <Link to={`/blog/${id}`}> 
    <div className="p-4  border-b-2 border-gray-200 pb-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
                <Avatar name={authorName} />
                <div className="font-extralight pl-2 text-sm">{authorName}</div> 
                <div className="flex justify-center flex-col pl-2"><Circle/></div>                                                 
                <div className="font-thin pl-2 text-slate-500 text-sm">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
    </div>
    </Link>
}

export function Circle() {
    return <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
}

export function Avatar({name, size = "small"}: {name: string, size?: "small" | "large"}) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small"?"text-xs": "text-md" } font-extralight text-gray-600 `}>
            {name[0]}
        </span>
    </div>
}