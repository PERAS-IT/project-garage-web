import React from 'react'
import CardComponent from '../../../components/CardComponents'

import { BsClockHistory } from "react-icons/bs";
import Button from '../../../components/Button';
import { useState } from 'react';
import Modal from '../../../components/Modal';
import TableHistory from './TableHistory';


export default function CarCardInService({ car }) {

    const [isShowHistory, SetIsShowHistory] = useState(false)
    return (
        <>

            <CardComponent width={60}>
                <div className='flex gap-[9rem]'>
                    <div className='size-[13rem] flex flex-col gap-2'>
                        <img src={car.image} alt="car-image" />
                    </div>
                    <div className='size-[14rem] flex flex-col items-start gap-3'>
                        <span className='text-md'>Model : {car.model}</span>
                        <span className='text-md'>Year : {car.year} </span>
                        <span className='text-md'>Brand : {car.brand}</span>
                        <span className='text-md'>Plate Number : {car.plateNumber}</span>
                        <span className='text-md'>Province : {car.province}</span>
                        <span className='text-md'>StatusService : {car.orders[0].statusOrder}</span>

                    </div>

                </div>
                <div className='w-full flex px-[9rem]'>
                    {/* <Button
                        background='yellow'
                        className="bg-yellow-500"
                        onClick={() => SetIsShowHistory(!isShowHistory)}>
                        Car history
                        <BsClockHistory />
                    </Button> */}

                </div>
            </CardComponent>
            {/* {
                isShowHistory &&
                <Modal
                    width={40}
                    title={"HISTORY SERVICE"}
                >
                    <TableHistory onClose={() => SetIsShowHistory(false)} />
                </Modal>
            } */}
        </>
    )
}
