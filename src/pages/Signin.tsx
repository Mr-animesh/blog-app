import { Quote } from "../components/Quote"
import {Form} from "../components/Form"
export const Signin = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <Form type="signin"/>
        </div>
        <div className="hidden lg:block">
            <Quote/>
        </div>
    </div>
}