import logo from '../assets/LOGO-1.png'
import Button from '../components/Button'

export default function Header() {
    return (
        <div className=" bg-[#091D1F] ">
            <header className="flex justify-between mx-auto max-w-[1440] px-[4rem] py-3 items-center text-white">
                <div><img src={logo} alt="logo" /></div>
                <div className=" flex justify-around gap-[10rem]">
                    <div>Home</div>
                    <div>Service</div>
                    <div>Context Us</div>
                </div>
                <div>
                    <Button background={"red"} width={"md"} color={"white"}>
                        user login
                    </Button>
                </div>
            </header>
        </div>
    )
}