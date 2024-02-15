import React from 'react'
import CardComponent from '../../../components/CardComponents'
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBin3Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import Button from '../../../components/Button';
import carMocUp from '../../../assets/car1.png'

export default function CarCardNewCar() {
    return (
        <>
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
                    </div>
                    <div >
                        <FiEdit className='cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-between gap-[6rem]'>
                    <Button background='yellow' className="bg-yellow-500">
                        Car history
                        <BsClockHistory />
                    </Button>
                    <Button background='blue'>
                        Request Service
                        <IoSettingsOutline />

                    </Button>
                    <Button background='red'>
                        Remove Car
                        <RiDeleteBin3Line />
                    </Button>
                </div>
            </CardComponent>
        </>

    )
}
