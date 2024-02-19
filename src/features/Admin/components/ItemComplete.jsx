import React from 'react'
import { FaCar } from 'react-icons/fa'

export default function ItemComplete() {
    return (
        <>
            <div className='w-full bg-gray-300 h-[10rem] flex p-2 gap-2 items-center rounded-full '>
                <div className='bg-green-300 size-[3rem] rounded-full items-center justify-center flex'>
                    <FaCar size={32} />
                </div>
                <span>Lorem ipsum dolor sit amet.</span>
                <div className='flex gap-3'>
                    <button className='w-[4rem] h-[1.5rem] bg-green-300 text-sm rounded-full '>Complete</button>
                </div>
            </div>
        </>
    )
}
