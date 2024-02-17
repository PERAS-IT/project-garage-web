import React from 'react'
import Button from '../../../components/Button'
import { useState } from 'react'

import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner';
import useCarAction from '../hooks/car-action';



export default function CarDeleteForm({ onClose, car }) {
    const { deleteCar } = useCarAction();
    const [loading, setLoading] = useState(false)

    const handleSubmitDelete = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await deleteCar(car.id)
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
            <span className='text-md'>Model : {car.model}</span>
            <span className='text-md'>Plate Number : {car.plateNumber}</span>
            <span className='text-md'>Province : {car.province}</span>

            <div className='flex w-full justify-center py-[2rem] gap-[5rem]'>
                <Button onClick={onClose} type={"button"}>
                    Cancel
                </Button>
                <Button background={"green"} onClick={handleSubmitDelete} >
                    Delete
                </Button>
            </div>
        </>
    )
}
