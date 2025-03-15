import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const PostCard = ({blog}:  Blog) => {
    return <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
                    <div className=" col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div  className="text-slate-400 pt-2">
                            Post on 2nd Dec 2023
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>
                    <div className=" col-span-4">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>
                        <div className="flex">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar name={blog.author.name || "anonymous"} size="large"/>
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Random catch phrase hardcoded   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
}