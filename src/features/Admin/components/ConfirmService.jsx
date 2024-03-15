import React from 'react'
import Spinner from '../../../components/Spinner'
import Button from '../../../components/Button'
import { useState } from 'react'
import useAdminContext from '../hooks/useAdminContext'
import { PiEngineBold } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import { RiErrorWarningFill } from "react-icons/ri";






const defaultValue = {
    engineService: "",
    fluidService: "",
    bodyService: "",
    electricalService: "",
    breakService: "",
    suspensionAndWheelService: ""
}

export default function ConfirmService({ order, onClose }) {
    const [loading, setLoading] = useState(false)

    const { updateService, createHistory } = useAdminContext()

    const [input, setInput] = useState(defaultValue)


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }
    const handleSent = async () => {
        try {
            await createHistory(order.id, input)
            console.log("success")
        } catch (error) {
            console.log(error)
        } finally {
            onClose()
        }
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
            <div className='flex flex-col gap-3  mt-4'>
                <div className='flex justify-around items-baseline'>
                    <label className='w-[15rem]'>
                        Engine Service
                        <PiEngineBold className='size-[2rem]' />
                    </label>

                    <textarea value={input.engineService} name='engineService' onChange={handleChange}></textarea>
                </div>
                <div className='flex justify-around items-baseline'>
                    <label className='w-[15rem]'>
                        Fluid Service
                        <FaOilCan className='size-[2rem]' />

                    </label>
                    <textarea value={input.fluidService} name='fluidService' onChange={handleChange}></textarea>

                </div>
                <div className='flex justify-around items-baseline'>
                    <label className='w-[15rem]'>
                        Body Service
                        <FaCar className='size-[2rem]' />
                    </label>
                    <textarea value={input.bodyService} name='bodyService' onChange={handleChange}></textarea>
                </div>
                <div className='flex justify-around items-baseline'>

                    <label className='w-[15rem]'>
                        Electrical Service
                        <MdOutlineElectricBolt className='size-[2rem]' />
                    </label>
                    <textarea value={input.electricalService} name='electricalService' onChange={handleChange}></textarea>
                </div>
                <div className='flex justify-around items-baseline'>
                    <label className='w-[15rem]' >
                        Break Service
                        <RiErrorWarningFill className='size-[2rem]' />
                    </label>
                    <textarea value={input.breakService} name='breakService' onChange={handleChange}></textarea>

                </div>
                <div className='flex justify-around items-baseline'>
                    <label className='w-[15rem]'>
                        Suspend & Wheel Service
                        <GiCarWheel className='size-[2rem]' />

                    </label>
                    <textarea value={input.suspensionAndWheelService} name='suspensionAndWheelService' onChange={handleChange} ></textarea>
                </div>
            </div>
            <div className='flex w-full justify-center py-[2rem] gap-[5rem]'>
                <Button onClick={onClose} type={"button"}>
                    Cancel
                </Button>
                <Button background={"yellow"} onClick={handleSent} >
                    Sent
                </Button>
            </div>

        </>
    )
}


