import React from 'react'
import CardComponent from '../../../components/CardComponents'

import carMocUp from '../../../assets/car1.png'
import { FiEdit } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import Button from '../../../components/Button';


export default function CarCardInService() {
    return (
        <CardComponent width={60}>
            <div className='flex gap-[9rem]'>
                <div className='size-[13rem] flex flex-col gap-2'>
                    <img src={carMocUp} alt="" />
                </div>
                <div className='size-[13rem] flex flex-col items-start gap-3'>
                    <span className='text-md'>Model type 3</span>
                    <span className='text-md'>Year : 2014</span>
                    <span className='text-md'>Brand : BMX</span>
                    <span className='text-md'>Plate Number : 111111</span>
                    <span className='text-md'>Province : Bangkok</span>
                    <span className='text-md'>StatusService : Pending</span>

                </div>
                <div >
                    <FiEdit className='cursor-pointer' />
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
