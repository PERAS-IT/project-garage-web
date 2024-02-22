import React from 'react'

export default function LinkCardAdmin({ image, title, color, onClick }) {
    return (
        <div className=' bg-white size-[12rem] rounded-full flex flex-col justify-center items-center shadow-[0_0_15px] cursor-pointer' onClick={onClick}>
            <img src={image} className={`size-[8rem] bg-${color} rounded-full p-4`} />
            <h1>{title}</h1>
        </div>
    )
}
