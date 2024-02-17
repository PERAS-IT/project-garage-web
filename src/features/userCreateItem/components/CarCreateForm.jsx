import React from 'react'
import Button from '../../../components/Button'
import { useState } from 'react'
import { useRef } from 'react'
import { CiImageOn } from "react-icons/ci";

import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner';
import useCarAction from '../hooks/car-action';

const defaultData = {
    brand: "",
    model: "",
    year: "",
    plateNumber: "",
    province: ""
}

export default function CarCreateForm({ onClose }) {

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
    const { createCar } = useCarAction();
    const [input, setInput] = useState(defaultData)
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const fileInputEl = useRef(null)


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('data', JSON.stringify(input))
            formData.append('image', image)
            await createCar(formData)
            setLoading(true)
            toast.success("Create Success")
            onClose()
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data.message)
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            {loading && <Spinner />}
            <form onSubmit={handleSubmit}>
                <div className='p-12'>
                    <div className='grid grid-cols-2 gap-[2rem]'>
                        <div className='flex flex-col'>
                            <label >Brand</label>
                            <select
                                className='py-2 px-4 rounded-xl mt-2'
                                onChange={handleChange}
                                value={input.brand}
                                name='brand'>
                                {brand.map((el, i) =>
                                    <option key={i} value={el}>
                                        {el}
                                    </option>)}
                            </select>
                            <label className='mt-2'>Model</label>
                            <input
                                className='py-2 px-4 rounded-xl mt-2'
                                type="text"
                                onChange={handleChange}
                                value={input.model}
                                name='model' />
                            <label className='mt-2'>Year</label>
                            <input
                                className='py-2 px-4 rounded-xl mt-2'
                                type="text"
                                onChange={handleChange}
                                value={input.year}
                                name='year' />
                            <label className='mt-2'>Plate Number</label>
                            <input
                                className='py-2 px-4 rounded-xl mt-2'
                                type="text"
                                onChange={handleChange}
                                value={input.plateNumber}
                                name='plateNumber' />
                            <label className='mt-2'>Province</label>
                            <input
                                className='py-2 px-4 rounded-xl mt-2'
                                type="text"
                                onChange={handleChange}
                                value={input.province}
                                name='province' />
                        </div>
                        <div className=''>

                            <input
                                type="file"
                                className='hidden' j
                                ref={fileInputEl}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setImage(e.target.files[0])
                                    }
                                }}
                            >
                            </input>
                            {image ? (
                                <div
                                    className='relative bg-gray-200 rounded-2xl'
                                    onClick={() => fileInputEl.current.click()}
                                >
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt='post'
                                        className='rounded-2xl' />
                                    <button
                                        className='absolute top-1 right-1 font-black'>
                                        &#10005;
                                    </button>

                                </div>
                            ) : (
                                <div
                                    className="bg-gray-200 hover:bg-gray-00 flex flex-col items-center rounded-2xl"
                                    role='button'
                                    onClick={() => fileInputEl.current.click()}
                                >
                                    <CiImageOn size={150} />
                                    <span>Add Car Image</span>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className='flex w-full justify-center py-[2rem] gap-[5rem]'>
                        <Button onClick={onClose} type={"button"}>
                            Cancel
                        </Button>
                        <Button background={"green"} onClick={handleSubmit} type={"submit"}>
                            Create Car
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}
