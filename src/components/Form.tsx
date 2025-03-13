export const Form = () => {
    return <div className="flex justify-center flex-col">
        <div className="flex justify-center ">
            <form>
                <div className="flex justify-center flex-col">
                    <label className="text-2xl font-bold">Username</label>
                    <input className="border-2 border-gray-500" type="text" placeholder="Enter your username" />
                    <label className="text-2xl font-bold">Email</label>
                    <input className="border-2 border-gray-500" type="email" placeholder="ashu@gmail" />
                    <label className="text-2xl font-bold">Password</label>
                    <input className="border-2 border-gray-500" type="password" />
                </div>
                <div className="flex justify-center flex-col">
                    <button>Sign up</button>
                </div>
            </form>

        </div>
    </div>
}