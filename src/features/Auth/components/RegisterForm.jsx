import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";

export default function RegisterForm() {
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });







    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={""}>
                <div className="flex flex-col gap-10">
                    <h1 className="text-white text-center text-[2.5rem]">Register</h1>
                    <Input
                        placeholder={"name"}
                        value={input.name}
                        name={"name"}
                        onChange={handleChangeInput}
                        errorMessage={""}
                    ></Input>
                    <Input
                        placeholder={"last-name"}
                        value={input.lastName}
                        name={"lastName"}
                        onChange={handleChangeInput}
                        errorMessage={""}
                    ></Input>
                    <Input
                        placeholder={"Email Address"}
                        value={input.emailAddress}
                        name={"emailAddress"}
                        onChange={handleChangeInput}
                        errorMessage={""}
                        type=""
                    ></Input>
                    <Input
                        placeholder={"Phone Number"}
                        value={input.phoneNumber}
                        name={"phoneNumber"}
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
                    <Input
                        placeholder={"Confirm Password"}
                        value={input.confirmPassword}
                        name={"confirmPassword"}
                        onChange={handleChangeInput}
                        errorMessage={""}
                        type="password"
                    ></Input>

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