import React from 'react'
import CardComponent from '../../../components/CardComponents'

import { BsClockHistory } from "react-icons/bs";
import Button from '../../../components/Button';


export default function CarCardInService({ car }) {


    return (
        <CardComponent width={60}>
            <div className='flex gap-[9rem]'>
                <div className='size-[13rem] flex flex-col gap-2'>
                    <img src={car.image} alt="car-image" />
                </div>
                <div className='size-[13rem] flex flex-col items-start gap-3'>
                    <span className='text-md'>Model : {car.model}</span>
                    <span className='text-md'>Year : {car.year} </span>
                    <span className='text-md'>Brand : {car.brand}</span>
                    <span className='text-md'>Plate Number : {car.plateNumber}</span>
                    <span className='text-md'>Province : {car.province}</span>
                    {/* <span className='text-md'>StatusService : {car.order.status}</span> */}

                </div>

            </div>
            <div className='w-full flex px-[9rem]'>
                <Button background='yellow' className="bg-yellow-500">
                    Car history
                    <BsClockHistory />
                </Button>

            </div>
        </CardComponent>
    )
}
