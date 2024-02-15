import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";
import { toast } from "react-toastify";
import validRegister from "../validation/validate-register";
import useAuth from "../../../hooks/use-auth";

export default function RegisterForm() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({})
    const { register } = useAuth();







    const handleChangeInput = e => {
        setError({})
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        const validateError = validRegister(input);
        if (validateError) {
            return setError(validateError)
        }
        try {
            delete input.confirmPassword
            await register(input);
            toast.success("Register Success")
        } catch (error) {
            if (error.response?.data.message === 'EMAIL_IN_USE') {
                return setError({ email: 'email already to use' })
            }
            toast.error(error.response?.data.message)
        }


    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className=" flex flex-col gap-4">
                    <h1 className="text-white text-center text-[2.5rem]">Register</h1>
                    <div className=" flex flex-col item-center justify-center">
                        <Input
                            placeholder={"First Name"}
                            value={input.firstName}
                            name={"firstName"}
                            onChange={handleChangeInput}
                        ></Input>
                        <div className="text-end h-[1.5rem]">
                            {error.firstName ? (
                                <small className="text-red-400">{error.firstName}</small>
                            ) : null}

                        </div>
                    </div>

                    <div className=" flex flex-col item-center justify-center">
                        <Input
                            placeholder={"Last Name"}
                            value={input.lastName}
                            name={"lastName"}
                            onChange={handleChangeInput}
                        ></Input>
                        <div className="text-end h-[1.5rem]">
                            {error.lastName ? (
                                <small className="text-red-400">{error.lastName}</small>
                            ) : null}

                        </div>
                    </div>
                    <div className=" flex flex-col item-center justify-center">
                        <Input
                            placeholder={"email"}
                            value={input.email}
                            name={"email"}
                            onChange={handleChangeInput}
                        ></Input>
                        <div className="text-end h-[1.5rem]">
                            {error.email ? (
                                <small className="text-red-400">{error.email}</small>
                            ) : null}

                        </div>
                    </div>
                    <div className=" flex flex-col item-center justify-center">
                        <Input
                            placeholder={"Phone Number"}
                            value={input.phoneNumber}
                            name={"phoneNumber"}
                            onChange={handleChangeInput}
                        ></Input>
                        <div className="text-end h-[1.5rem]">
                            {error.phoneNumber ? (
                                <small className="text-red-400">{error.phoneNumber}</small>
                            ) : null}

                        </div>
                    </div>
                    <div className=" flex flex-col item-center justify-center">
                        <Input
                            placeholder={"Password"}
                            value={input.password}
                            name={"password"}
                            onChange={handleChangeInput}
                            type="password"
                        ></Input>
                        <div className="text-end h-[1.5rem]">
                            {error.password ? (
                                <small className="text-red-400">{error.password}</small>
                            ) : null}

                        </div>
                    </div>
                    <div className=" flex flex-col item-center justify-center">
                        <Input
                            placeholder={"confirm Password"}
                            value={input.confirmPassword}
                            name={"confirmPassword"}
                            onChange={handleChangeInput}
                            type="password"
                        ></Input>
                        <div className="text-center h-[1.5rem]">
                            {error.confirmPassword ? (
                                <small className="text-red-400">{error.confirmPassword}</small>
                            ) : null}

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button background={"red"} width={"lg"} color={"white"}>
                            Register
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}