import React from 'react'
import { FaBusinessTime } from 'react-icons/fa'

export default function ItemRequest() {
    return (
        <>
            <div className='w-full bg-gray-300 h-[10rem] flex p-2 gap-2 items-center rounded-full'>
                <div className='bg-cyan-500 size-[3rem] rounded-full items-center justify-center flex'>
                    <FaBusinessTime size={32} />
                </div>
                <span>Lorem ipsum dolor sit amet.</span>
                <div className='flex gap-3'>
                    <button className='w-[4rem] h-[1.5rem] bg-cyan-500 text-sm rounded-full text-white'>Approve</button>
                    <button className='w-[3rem] h-[1.5rem] bg-red-500 text-sm rounded-full text-white'>Reject</button>
                </div>
            </div>
        </>
    )
}
