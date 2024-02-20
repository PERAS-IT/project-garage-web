import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";
import validateLogin from "../validation/validate-login";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";
import validateLoginAdmin from "../validation/validate-loginAdmin";

const defaultInput = {
    emailOrPhoneNumber: '',
    password: '',
}

const defaultInputAdmin = {
    userName: '',
    password: ''
}

export default function LoginForm() {
    const { login, loginAdmin } = useAuth();
    const [input, setInput] = useState(defaultInput);
    const [inputAdmin, setInputAdmin] = useState(defaultInputAdmin);
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState({})
    const [errorAdmin, setErrorAdmin] = useState({})


    const handleChangeInput = e => {
        setError({})
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleChangeInputAdmin = e => {
        setErrorAdmin({})
        setInputAdmin({ ...inputAdmin, [e.target.name]: e.target.value })
    }

    const handleCheckbox = e => {
        if (isAdmin) {
            setIsAdmin(false)
            setInputAdmin(defaultInputAdmin)
        } else {
            setIsAdmin(true)
            setInput(defaultInput)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (isAdmin) {
                const validationErrorAdmin = validateLoginAdmin(inputAdmin)
                console.log(validationErrorAdmin)
                if (validationErrorAdmin) {
                    return setError(validationErrorAdmin);
                }
                await loginAdmin(inputAdmin);
                setInputAdmin(defaultInputAdmin)
            } else {
                const validationError = validateLogin(input);
                console.log(validationError)
                if (validationError) {
                    return setError(validationError);
                }
                await login(input);
                setInput(defaultInput)
            }

            toast.success("login successFully")

        } catch (error) {
            toast.error("error.response?.data.message")
        }
        setInput(defaultInput)
    }
    return (
        <>  {isAdmin ? (
            <form onSubmit={handleSubmit} className="flex flex-row justify-end">
                <div className="flex flex-col">
                    <div className="py-3">
                        <h1 className="text-white text-center text-[2.5rem]">{isAdmin && "ADMIN"} LOG IN</h1>
                    </div>
                    <div>
                        <Input
                            placeholder={"user name"}
                            value={inputAdmin.userName}
                            name={"userName"}
                            onChange={handleChangeInputAdmin}
                            width={25}
                            error={error.userName}
                        ></Input>
                        <div className="text-end h-[2rem]">
                            {error.userName ? (
                                <small className="text-red-400">{error.userName}</small>
                            ) : null}
                        </div>
                        <Input
                            placeholder={"Password"}
                            value={inputAdmin.password}
                            name={"password"}
                            onChange={handleChangeInputAdmin}
                            type="password"
                            width={25}
                            error={inputAdmin.password}
                        ></Input>
                        <div className="text-end h-[2rem]">
                            {error.password ? (
                                <small className="text-red-400">{error.password}</small>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            background={"red"} width={"lg"} color={"white"}
                        >
                            LOG IN
                        </Button>
                    </div>


                </div>
            </form>
        ) : (
            <form onSubmit={handleSubmit} className="flex flex-row justify-end">
                <div className="flex flex-col">
                    <div className="py-3">
                        <h1 className="text-white text-center text-[2.5rem]">{isAdmin && "ADMIN"} LOG IN</h1>
                    </div>
                    <div>
                        <Input
                            placeholder={"Email address or mobile number"}
                            value={input.emailOrPhoneNumber}
                            name={"emailOrPhoneNumber"}
                            onChange={handleChangeInput}
                            width={25}
                            error={error.emailOrPhoneNumber}
                        ></Input>
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
                            width={25}
                            error={input.password}
                        ></Input>
                        <div className="text-end h-[2rem]">
                            {error.password ? (
                                <small className="text-red-400">{error.password}</small>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            background={"red"} width={"lg"} color={"white"}
                        >
                            LOG IN
                        </Button>
                    </div>


                </div>
            </form>
        )}

            <div className="flex justify-end gap-3">
                <label className="text-white" htmlFor="">Admin</label>
                <input type="checkbox" value="" checked={isAdmin} className="checkbox checkbox-error" onChange={handleCheckbox} />
            </div>
        </>
    )
}
