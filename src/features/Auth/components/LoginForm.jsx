import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";
import validateLogin from "../validation/validate-login";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";


export default function LoginForm() {
    const { login } = useAuth();
    const [input, setInput] = useState({
        emailOrMobile: '',
        password: '',
    });
    const [error, setError] = useState({})


    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const validationError = validateLogin(input);
            if (validationError) {
                return setError(validationError);
            }
            await login(input);
            toast.success("login successFully")

        } catch (error) {
            toast.error("error.response?.data.message")
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-10">
                    <h1 className="text-white text-center text-[2.5rem]">LOG IN</h1>
                    <Input
                        placeholder={"Email address or mobile number"}
                        value={input.emailOrMobile}
                        name={"emailOrMobile"}
                        onChange={handleChangeInput}
                        errorMessage={""}
                    ></Input>
                    <Input
                        placeholder={"Password"}
                        value={input.password}
                        name={"password"}
                        onChange={handleChangeInput}
                        errorMessage={""}
                        type="password"
                    ></Input>
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