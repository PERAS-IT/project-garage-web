import React from 'react'
import { useState } from 'react'
import { FaBusinessTime } from 'react-icons/fa'
import RejectRequest from './RejectRequest'
import ConfirmRequest from './ConfirmRequest'
import Modal from '../../../components/Modal'

export default function ItemRequest({ order }) {
    const [isShowApprove, setShowApprove] = useState(false)
    const [isShowReject, setShowReject] = useState(false)

    return (
        <>
            <div className='w-full bg-gray-300  flex p-2  items-center justify-around rounded-full'>
                <div className='bg-cyan-500 size-[3rem] rounded-full items-center justify-center flex'>
                    <FaBusinessTime size={32} />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm'> Brand : {order.vehicle.brand}</span>
                    <span className='text-sm'> Plate Number : {order.vehicle.plateNumber} </span>
                    <span> Service: {order.categoryService} </span>
                </div>
                <div className='flex gap-3'>
                    <button
                        className='w-[4rem] h-[1.5rem] bg-cyan-500 text-sm rounded-full text-white'
                        onClick={() => setShowApprove(!isShowApprove)}
                    >Approve
                    </button>
                    <button
                        className='w-[3rem] h-[1.5rem] bg-red-500 text-sm rounded-full text-white'
                        onClick={() => setShowReject(!isShowReject)}
                    >Reject</button>
                </div>
            </div>
            {isShowApprove &&
                <Modal
                    width={30}
                    title={"Confirm Request"}
                >
                    <ConfirmRequest onClose={() => setShowApprove(false)} order={order} />
                </Modal>}
            {isShowReject &&
                <Modal
                    width={30}
                    title={"Please Make Sure For Reject"}
                >
                    <RejectRequest onClose={() => setShowReject(false)} order={order} />
                </Modal>}
        </>
    )
}
