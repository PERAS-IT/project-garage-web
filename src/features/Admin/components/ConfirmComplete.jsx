import React from 'react'
import Spinner from '../../../components/Spinner'
import Button from '../../../components/Button'
import { useState } from 'react'
import useAdminContext from '../hooks/useAdminContext'

export default function ConfirmComplete({ order, onClose }) {
    const [loading, setLoading] = useState(false)

    const { updateComplete } = useAdminContext()

    const handleComplete = () => {
        updateComplete(order.id)
        onClose()
    }

    return (
        <>
            {loading && <Spinner />}
            <div className='flex flex-col items-center'>
                <span className='text-md'>Model : {order.vehicle.model}</span>
                <span className='text-md'>Plate Number : {order.vehicle.plateNumber}</span>
                <span className='text-md'>Province : {order.vehicle.province} </span>
                <span className='text-md'>Service : {order.categoryService} </span>
                <span className='text-md'>detail : {order.detailRequest} </span>
            </div>

            <div className='flex w-full justify-center py-[2rem] gap-[5rem]'>
                <Button onClick={onClose} type={"button"}>
                    close
                </Button>
                <Button background={"light_green"} onClick={handleComplete} >
                    Complete
                </Button>
            </div>

        </>
    )
}
