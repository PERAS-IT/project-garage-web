import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";

export default function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobile: '',
        password: '',
    });
    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={""}>
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