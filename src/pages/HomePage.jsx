import { Link } from "react-router-dom";
import LoginPic from '../assets/LoginPic.png'
import RegisterPic from '../assets/RegisterPic.png'
import CarService from '../assets/CarService.png'
import CustomerFeedback from '../assets/CustomerFeedback.png'
import Button from "../components/Button";
import CardComponent from "../components/CardComponents";
import Header from "../layout/Header";

import Title from "../layout/Title";

export default function HomePage() {
    return (
        <div>
            <Header>
                <div className=" flex justify-around gap-[10rem]">
                    <div>Home</div>
                    <div>Service</div>
                    <Link to={'/register'}>
                        <div>Register</div>
                    </Link>
                </div>
                <div>
                    <Link to={'/login'}>
                        <Button background={"red"} width={"md"} color={"white"}>
                            user login
                        </Button>
                    </Link>
                </div>
            </Header>
            <Title textTitle={"Professional Car Service Provide"} />
            <div className="text-center max-w-[1440] py-[4rem]">
                <h1 className="text-[4rem]">Garage Service</h1>
                <div className='flex flex-wrap justify-center gap-[4rem] p-[3rem]'>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={LoginPic} alt="" className="bg-white w-[250px] h-[250px]" />
                        <span className="text-orange-500 text-3xl">login</span>
                    </CardComponent>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={RegisterPic} alt="" className="bg-white w-[250px] h-[250px]" />
                        <span className="text-orange-500 text-3xl">Register for Booking</span>
                    </CardComponent>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={CarService} alt="" className="bg-white w-[250px] h-[250px]" />
                        <span className="text-orange-500 text-3xl">Car Service</span>
                    </CardComponent>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={CustomerFeedback} alt="" className="bg-white w-[250px] h-[250px]" />
                        <span className="text-orange-500 text-3xl">Customer Feedback</span>
                    </CardComponent>

                </div>

            </div>

        </div>
    )
}