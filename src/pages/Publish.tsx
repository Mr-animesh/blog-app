import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { set } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const navigate = useNavigate();
    return <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-full">
                    <input onChange={(e)=> {
                        setTitle(e.target.value)
                    }} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focuslborder-blue-500 block w-full p-2.5" placeholder="Title" />

                    <TextEditor onChange={(e)=>{
                    setContent(e.target.value)
                    }} />

                    <div className="flex items-center justify-between px-3 py-2 border-t  border-gray-200">
                        <button onClick={async()=>{
                            const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                title,
                                content
                            }, {
                                headers: {
                                    Authorization:`Bearer ${ localStorage.getItem("token")}`
                                }
                            });
                            navigate(`/blog/${res.data.id}`)
                        }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center 
                        text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                            Post
                        </button>
                    </div>
                </div>
            </div>
    </div>
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
            <div className=" py-2 bg-white rounded-t-lg  ">
                <label  className="sr-only">Your content</label>
                <textarea onChange={onChange} id="comment" rows={9} className="pl-2 pt-2 w-full px-0 text-sm text-gray-900 
                bg-white border-0 focus:ring-0  focus:outline-none" placeholder="Write a blog..." required ></textarea>
            </div>
        </div>
    </form>
}