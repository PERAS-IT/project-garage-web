import React from 'react'
import { useState } from 'react'
import useCarAction from '../hooks/car-action'

export default function CarEditForm({ car, onclose }) {

    const brand = [
        "other",
        "toyota",
        "honda",
        "suzuki",
        "mazda",
        "mitsubishi",
        "byd",
        "tesla",
        "lumbogini"
    ]
    const { editCarById } = useCarAction()
    const [input, setInput] = useState(car)


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editCarById(car.id, input)
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data.message)
        }
        onclose()
    }
    return (
        <>
            <form className='size-[13rem] flex flex-col items-start gap-3'
            >
                <span
                    className='text-md'>
                    Model : <input
                        className='w-[8rem] bg-gray-200 rounded-full px-2'
                        type="text"
                        onChange={handleChange}
                        name='model'
                        value={input.model} />
                </span>
                <span
                    className='text-md'>
                    Year : <input
                        className='w-[8rem] bg-gray-200 rounded-full px-2'
                        type="text"
                        onChange={handleChange}
                        name='year'
                        value={input.year} />
                </span>
                <span
                    className='text-md'>
                    Brand :<select
                        className='w-[8rem] bg-gray-200 rounded-full px-2'
                        type="text"
                        onChange={handleChange}
                        name='brand'
                        value={input.brand}
                        defaultValue={input.brand}>
                        {brand.map((el, i) =>
                            <option key={i} value={el}>
                                {el}
                            </option>)}
                    </select>
                </span>
                <span
                    className='text-md'>
                    Plate Number : <input
                        className='w-[6rem] bg-gray-200 rounded-full px-2'
                        type="text"
                        name='plateNumber'
                        onChange={handleChange}
                        value={input.plateNumber} />
                </span>
                <span
                    className='text-md'>
                    Province :<input
                        className='w-[8rem] bg-gray-200 rounded-full px-2'
                        type="text"
                        name='province'
                        onChange={handleChange}
                        value={input.province} />
                </span>
                <div className='w-full flex justify-center gap-4'>
                    <button className='bg-blue-400 p-1 rounded-xl text-sm'
                        onClick={handleSubmit}> Save Edit
                    </button>
                    <button
                        className='bg-red-300 rounded-xl text-sm p-1'
                        type='button'
                        onClick={onclose}>
                        cancel
                    </button>
                </div>
            </form>
        </>
    )
}
