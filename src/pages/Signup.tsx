import { Quote } from "../components/Quote"
import {Form} from "../components/Form"
export const Signup = () => {
    return <div className="grid grid-cols-2">
        <Form/>
        <Quote/>
    </div>
}