import React from 'react'
import Spinner from '../../../components/Spinner'
import Button from '../../../components/Button'
import { useState } from 'react'

export default function RejectRequest({ car, onClose }) {
    const [loading, setLoading] = useState(false)
    return (
        <>
            {loading && <Spinner />}
            <span className='text-md'>Model : {car}</span>
            <span className='text-md'>Plate Number : {car}</span>
            <span className='text-md'>Province : {car}</span>
            <span className='text-md'></span>

            <div className='flex w-full justify-center py-[2rem] gap-[5rem]'>
                <Button onClick={onClose} type={"button"}>
                    close
                </Button>
                <Button background={"red"} onClick={""} >
                    Reject
                </Button>
            </div>

        </>
    )
}
