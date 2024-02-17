import React from 'react'
import Button from '../../../components/Button'
import { useState } from 'react'

import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner';
import useCarAction from '../hooks/car-action';

const defaultValue = {
    categoryService: "",
    mileStoneNumber: "",
    detailRequest: ""
}


export default function CarRequestForm({ onClose, car }) {
    const { requestServiceById } = useCarAction();
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState(defaultValue)

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitRequest = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await requestServiceById(car.id, input)
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
            <form onSubmit={handleSubmitRequest}>
                <div className='flex flex-col p-8 gap-4'>
                    <label >Category Service</label>
                    <input
                        className='py-2 px-4 rounded-xl mt-2'
                        type="text"
                        onChange={handleChange}
                        value={input.categoryService}
                        name='categoryService' />
                    <label >Detail request Service</label>
                    <textarea
                        className='rounded-xl px-4 py-3 resize-none'
                        onChange={handleChange}
                        rows={5}
                        value={input.detailRequest}
                        name='detailRequest'

                    />
                    <label >Mile Stone Number</label>
                    <input
                        className='py-2 px-4 rounded-xl mt-2'
                        type="text"
                        onChange={handleChange}
                        value={input.plateNumber}
                        name='plateNumber' />
                </div>

                <div className='flex flex-col w-full justify-center py-[2rem] gap-[1rem]'>
                    <Button width={'lg'} background={"green"} onClick={handleSubmitRequest}>
                        Sent Request
                    </Button>
                    <Button width={'lg'} onClick={onClose} type={"button"}>
                        Cancel
                    </Button>
                </div>
            </form>
        </>
    )
}
