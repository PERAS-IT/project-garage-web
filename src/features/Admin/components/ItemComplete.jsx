import React from 'react'
import { useState } from 'react'
import { FaCar } from 'react-icons/fa'
import Modal from '../../../components/Modal'
import ConfirmComplete from './ConfirmComplete'

export default function ItemComplete({ order }) {
    const [isShowComplete, setShowComplete] = useState(false)
    return (
        <>
            <div className='w-full bg-gray-300 flex p-2 gap-2 items-center justify-around rounded-full '>
                <div className='bg-green-300 size-[3rem] rounded-full items-center justify-center flex'>
                    <FaCar size={32} />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm'> Brand : {order.vehicle.brand}</span>
                    <span className='text-sm'> Plate Number : {order.vehicle.plateNumber} </span>
                    <span> Service: {order.categoryService} </span>
                </div>
                <div className='flex gap-3'>
                    <button
                        className='w-[4rem] h-[1.5rem] bg-green-300 text-sm rounded-full '
                        onClick={() => setShowComplete(true)}>Complete</button>
                </div>
            </div>
            {isShowComplete &&
                <Modal
                    width={20}
                    title={"Confirm Request"}
                >
                    <ConfirmComplete onClose={() => setShowComplete(false)} order={order} />
                </Modal>}
        </>
    )
}
