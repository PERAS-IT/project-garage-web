import Button from "../components/Button";
import CardComponent from "../components/CardComponents";
import LoginForm from "../features/Auth/components/LoginForm";
import { Link } from "react-router-dom";

import Header from "../layout/Header";
import Title from "../layout/Title";

export default function LoginPage() {
    return (
        <div>
            <Title textTitle={"User login"} />
            <div className="flex justify-center mt-[7rem]">
                <CardComponent bg={"black"} width={55} height={25}>
                    <LoginForm></LoginForm>
                </CardComponent>
            </div>
            <div className="m-[4rem] text-center">
                <Link to={'/'}>
                    <Button width={"lg"}>HOME</Button>
                </Link>
            </div>
        </div>
    )
}