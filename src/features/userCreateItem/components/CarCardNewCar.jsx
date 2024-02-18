import React from 'react'
import CardComponent from '../../../components/CardComponents'
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBin3Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import Button from '../../../components/Button';
import { useState } from 'react';
import CarDeleteForm from './CarDeleteForm';
import Modal from '../../../components/Modal';
import CarRequestForm from './CarRequestForm';
import CarEditForm from './CarEditForm';

export default function CarCardNewCar({ car }) {
    const [isEdit, setIsEdit] = useState(true)
    const [isShowDelete, setIsShowDelete] = useState(false)
    const [isShowRequest, setIsShowRequest] = useState(false)

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }
    const handleChange = (e) => {

    }
    return (
        <>
            <CardComponent width={60}>
                <div className='flex gap-[9rem]'>
                    <div className='size-[13rem] flex flex-col gap-2'>
                        <img src={car.image} alt="car-image" />
                    </div>
                    <div className='size-[13rem] flex flex-col items-start gap-3'>
                        {isEdit ?
                            (
                                <>
                                    <span className='text-md'>Model : {car.model}</span>
                                    <span className='text-md'>Year : {car.year} </span>
                                    <span className='text-md'>Brand : {car.brand}</span>
                                    <span className='text-md'>Plate Number : {car.plateNumber}</span>
                                    <span className='text-md'>Province : {car.province}</span>

                                </>
                            ) : (
                                <CarEditForm car={car} onclose={() => setIsEdit(!isEdit)} />
                            )}
                    </div>
                    <div >
                        {isEdit && <FiEdit className='cursor-pointer' onClick={() => setIsEdit(!isEdit)} />}
                    </div>
                </div>
                <div className='flex justify-between gap-[6rem]'>
                    <Button
                        background='yellow'
                        className="bg-yellow-500">
                        Car history
                        <BsClockHistory />
                    </Button>
                    <Button
                        background='blue'
                        onClick={() => setIsShowRequest(!isShowRequest)}>
                        Request Service
                        <IoSettingsOutline />

                    </Button>
                    <Button background='red' onClick={() => setIsShowDelete(!isShowDelete)}>
                        Remove Car
                        <RiDeleteBin3Line />
                    </Button>
                </div>
            </CardComponent >
            {isShowDelete &&
                <Modal
                    width={50}
                    title={"Please Make Sure For Delete"}
                >
                    <CarDeleteForm
                        onClose={() => setIsShowDelete(false)}
                        car={car} />
                </Modal>
            }
            {
                isShowRequest &&
                <Modal
                    width={40}
                    title={"Please Make sure for delete"}
                >
                    <CarRequestForm
                        onClose={() => setIsShowRequest(false)}
                        car={car} />
                </Modal>
            }
        </>

    )
}
