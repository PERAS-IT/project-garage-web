import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";
import validateLogin from "../validation/validate-login";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";

const defaultInput = {
    emailOrPhoneNumber: '',
    password: '',
}

export default function LoginForm() {
    const { login, loginAdmin } = useAuth();
    const [input, setInput] = useState(defaultInput);
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState({})


    const handleChangeInput = e => {
        setError({})
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const validationError = validateLogin(input);
            console.log(validationError)
            if (validationError) {
                return setError(validationError);
            }
            await login(input);

            toast.success("login successFully")

        } catch (error) {
            toast.error("error.response?.data.message")
        }
        setInput(defaultInput)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-row justify-end">
                <div className="flex flex-col">
                    <div className="py-3">
                        <h1 className="text-white text-center text-[2.5rem]">{isAdmin && "ADMIN"} LOG IN</h1>
                    </div>
                    {isAdmin ?
                        <Input
                            placeholder={"Email address or mobile number"}
                            value={input.userName}
                            name={"userName"}
                            onChange={handleChangeInput}
                        ></Input> :
                        <Input
                            placeholder={"Email address or mobile number"}
                            value={input.emailOrPhoneNumber}
                            name={"emailOrPhoneNumber"}
                            onChange={handleChangeInput}
                        ></Input>}
                    <div className="text-end h-[2rem]">
                        {error.emailOrPhoneNumber ? (
                            <small className="text-red-400">{error.emailOrPhoneNumber}</small>
                        ) : null}
                    </div>
                    <Input
                        placeholder={"Password"}
                        value={input.password}
                        name={"password"}
                        onChange={handleChangeInput}
                        type="password"
                    ></Input>
                    <div className="text-end h-[2rem]">
                        {error.password ? (
                            <small className="text-red-400">{error.password}</small>
                        ) : null}
                    </div>

                    <div className="flex justify-end gap-3">
                        <label className="text-white" htmlFor="">Admin</label>
                        <input type="checkbox" checked={isAdmin} className="checkbox checkbox-error" onChange={() => setIsAdmin(!isAdmin)} />

                    </div>
                    <div className="flex justify-center">
                        <Button background={"red"} width={"lg"} color={"white"}>
                            LOG IN
                        </Button>
                    </div>

                </div>
            </form>
        </>
    )
}