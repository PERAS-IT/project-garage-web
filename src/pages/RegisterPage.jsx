import Button from "../components/Button";
import CardComponent from "../components/CardComponents";
import RegisterForm from "../features/Auth/components/RegisterForm";
import Header from "../layout/Header";
import Title from "../layout/Title";

export default function RegisterPage() {
    return (
        <div>
            <Title textTitle={"Register for service "} />
            <div className="flex justify-center mt-[5rem]">
                <CardComponent bg={"black"} width={55} height={50}>
                    <RegisterForm />
                </CardComponent>
            </div>
            <div className="m-[4rem] text-center">
                <Button width={"lg"}>HOME</Button>
            </div>
        </div>
    )
}