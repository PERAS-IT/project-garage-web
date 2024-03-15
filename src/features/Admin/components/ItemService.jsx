import React from 'react'
import { useState } from 'react'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import Modal from '../../../components/Modal'
import ConfirmComplete from './ConfirmComplete'
import ConfirmService from './ConfirmService'

export default function ItemService({ order }) {
    const [isShowSent, setShowSent] = useState(false)
    return (
        <>
            <div className='w-full bg-gray-300  flex p-2 gap-2 items-center justify-around rounded-full '>
                <div className='bg-yellow-400 size-[3rem] rounded-full items-center justify-center flex'>
                    <FaScrewdriverWrench size={32} />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm'> Brand : {order.vehicle.brand}</span>
                    <span className='text-sm'> Plate Number : {order.vehicle.plateNumber} </span>
                    <span> Service: {order.categoryService} </span>

                </div>
                <div className='flex gap-3'>
                    <button
                        className='w-[4rem] h-[1.5rem] bg-yellow-400 text-sm rounded-full text-white'
                        onClick={() => setShowSent(true)}>Sent</button>
                </div>
            </div>
            {isShowSent &&
                <Modal
                    width={40}
                    title={"Complete Service"}
                >
                    <ConfirmService onClose={() => setShowSent(false)} order={order} />
                </Modal>}
        </>

    )
}
