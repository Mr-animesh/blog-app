import { ChangeEvent, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {SignupInput} from "@sumana1005/meduim-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

// trpc read for type safety of frontend and backend
export const Form = ({type}: {type:"signup"| "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email:"",
        password: ""
    });

    async function sendRequest() {
        try{
            const res= await axios.post(`${BACKEND_URL}/api/v1/${type ==="signup"?"signup":"signin"}`, postInputs);
            const jwt = res.data;
            localStorage.setItem("token", jwt.jwt);
            navigate("/blogs");
        } catch(e) {
            console.log(e);
        }
    }
    return <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center ">
                <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold ">
                        CREATE AN ACCOUNT
                    </div>
                    <div className="text-slate-500">
                       {type ==="signup"? "Already have an account?": "Don't have an account?"} 
                        <Link className="pl-2 underline" to={type === "signup"?"/signin": "/signup"}>{type === "signup"?"Sign in":"Sign up"}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type=== "signup"? <LabelledInput label="Name" placeholder="ashu" onChange={(e) =>{
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />: null}
                    <LabelledInput label="Username" placeholder="ashu@gmail.com" onChange={(e) =>{
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="3423" onChange={(e) =>{
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    {/* <div className="flex justify-center flex-col">
                        <label className="text-2xl font-bold">Username</label>
                        <input className="border-2 border-gray-500" type="text" placeholder="Enter your email" />
                        <label className="text-2xl font-bold">Email</label>
                        <input className="border-2 border-gray-500" type="email" placeholder="ashu@gmail" />
                        <label className="text-2xl font-bold">Password</label>
                        <input className="border-2 border-gray-500" type="password" />
                    </div>
                    <div className="flex justify-center flex-col">
                        <button>Sign up</button>
                    </div> */}
                    <button onClick={sendRequest} type="button" className=" mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                    focus: ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        {type === "signup" ? "Sign up " : "Sign in"}
                    </button>
                </div>
            </div>
            </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    type?: string;
}

function LabelledInput({label, placeholder, onChange, type}:LabelledInputType) {
    return <div>
        <label  className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 bordre border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
        placeholder={placeholder} required />
    </div>
}