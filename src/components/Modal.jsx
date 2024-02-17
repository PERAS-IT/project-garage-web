import React from 'react'
import Button from './Button'
import { useRef } from 'react'
import { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import CarCreateForm from '../features/userCreateItem/components/CarCreateForm';

const defaultData = {
    brand: "",
    model: "",
    plateNumber: "",
    province: ""
}

export default function Modal({ title, children, onClose, width }) {



    return (
        <>
            <div className='fixed bg-gray-500 inset-0 opacity-60'></div>
            <div className='fixed inset-0'>
                <div className='flex items-center justify-center min-h-full'>

                    <div className='bg-gray-300 w-[400px] rounded-lg shadow-[0_0_10px_rgb(0,0,0,0.6)] max-h-[calc(100vh-4rem)] flex flex-col'
                        style={{ width: `${width}rem` }}
                    >
                        <div className='border-b flex justify-center p-4 items-center'>
                            <div>
                                {/* title */}
                                <h1 className='text-3xl'>{title}</h1>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
