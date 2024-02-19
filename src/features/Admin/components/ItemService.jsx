import React from 'react'
import { FaScrewdriverWrench } from 'react-icons/fa6'

export default function ItemService() {
    return (
        <div className='w-full bg-gray-300 h-[10rem] flex p-2 gap-2 items-center rounded-full '>
            <div className='bg-yellow-400 size-[3rem] rounded-full items-center justify-center flex'>
                <FaScrewdriverWrench size={32} />
            </div>
            <span>Lorem ipsum dolor sit amet.</span>
            <div className='flex gap-3'>
                <button className='w-[4rem] h-[1.5rem] bg-yellow-400 text-sm rounded-full text-white'>Sent</button>
            </div>
        </div>
    )
}
