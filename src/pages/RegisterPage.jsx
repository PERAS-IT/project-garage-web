import { Link } from "react-router-dom";
import Button from "../components/Button";
import CardComponent from "../components/CardComponents";
import RegisterForm from "../features/Auth/components/RegisterForm";
import Header from "../layout/Header";
import Title from "../layout/Title";

export default function RegisterPage() {
    return (
        <div>
            <Header>

            </Header>
            <Title textTitle={"Register for service "} />
            <div className="flex justify-center mt-[5rem]">
                <CardComponent bg={"black"} width={50} height={50}>
                    <RegisterForm />
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