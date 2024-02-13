
import Button from "../components/Button";
import CardComponent from "../components/CardComponents";
import Header from "../layout/Header";

import Title from "../layout/Title";

export default function HomePage() {
    return (
        <div>
            <Title textTitle={"Professional Car Service Provide"} />
            <div className="text-center max-w-[1440] py-[4rem]">
                <h1 className="text-[4rem]">Garage Service</h1>
                <div className='flex flex-wrap justify-center gap-[4rem] p-[3rem]'>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={""} alt="" className="bg-white w-[190px] h-[250px]" />
                        <span className="text-orange-500 text-2xl">login</span>
                    </CardComponent>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={""} alt="" className="bg-white w-[190px] h-[250px]" />
                        <span className="text-orange-500 text-2xl">Register for Booking</span>
                    </CardComponent>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={""} alt="" className="bg-white w-[190px] h-[250px]" />
                        <span className="text-orange-500 text-2xl">Car Service</span>
                    </CardComponent>
                    <CardComponent bg={"white"} width={22} height={28} title={"login"} >
                        <img src={""} alt="" className="bg-white w-[190px] h-[250px]" />
                        <span className="text-orange-500 text-2xl">Customer Feedback</span>
                    </CardComponent>

                </div>

            </div>

        </div>
    )
}