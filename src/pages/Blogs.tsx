import { use } from "react"
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading){
        return<div>
            loading...
        </div>
    }
    return <div >
        <Appbar />
        <div className="flex justify-center">
        <div className="max-w-lx">
            <BlogCard 
                authorName={"astick"}
                title={"song of winds is  a got book which was supposed to release"}
                content={"content of blog is trash for anyone to read now it not gonna releaase ever so we are as good as not knowing about it , and i told you that you will not gain any knowledge by reading this blog but still here you are grimming and not want to move forward from thrash."}
                publishedDate={"2nd feb"} />
            <BlogCard 
                authorName={"astick"}
                title={"song of winds is  a got book which was supposed to release"}
                content={"content of blog is trash for anyone to read now it not gonna releaase ever so we are as good as not knowing about it , and i told you that you will not gain any knowledge by reading this blog but still here you are grimming and not want to move forward from thrash."}
                publishedDate={"2nd feb"} />
            <BlogCard 
                authorName={"astick"}
                title={"song of winds is  a got book which was supposed to release"}
                content={"content of blog is trash for anyone to read now it not gonna releaase ever so we are as good as not knowing about it , and i told you that you will not gain any knowledge by reading this blog but still here you are grimming and not want to move forward from thrash."}
                publishedDate={"2nd feb"} />
        </div>
        </div>
    </div>
}