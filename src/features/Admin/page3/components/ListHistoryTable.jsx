import React from 'react'
import useSearchHistory from '../hooks/useSearchHistory'
import { FaFileUpload } from 'react-icons/fa'
import { BiEdit } from 'react-icons/bi'
import { useState } from 'react'

export default function ListHistoryTable(listHistory, index) {
    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState(listHistory)
    console.log(listHistory)

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {

    }

    return (
        <>
            {isEdit ? (
                <tr className='bg-[#26AEB7]'>
                    <th>{index + 1}</th>
                    <td>{listHistory?.order.vehicle.plateNumber}</td>
                    <td>{listHistory?.order.vehicle.brand}</td>
                    <td>{listHistory?.order.vehicle.model}</td>
                    <form onSubmit={handleSubmit}>
                        <td>
                            <input
                                className='w-[5rem] bg-gray-200 rounded-full px-2'
                                type="text"
                                onChange={handleChange}
                                name='engineService'
                                value={input.engineService} />
                        </td>
                        <td>
                            <input
                                className='w-[5rem] bg-gray-200 rounded-full px-2'
                                type="text"
                                onChange={handleChange}
                                name='fluidService'
                                value={input.fluidService} />
                        </td>
                        <td>
                            {listHistory?.order.vehicle.bodyService}
                            <input
                                className='w-[5rem] bg-gray-200 rounded-full px-2'
                                type="text"
                                onChange={handleChange}
                                name='bodyService'
                                value={input.bodyService} />
                        </td>
                        <td>
                            <input
                                className='w-[5rem] bg-gray-200 rounded-full px-2'
                                type="text"
                                onChange={handleChange}
                                name='electricalService'
                                value={input.electricalService} />
                        </td>
                        <td>
                            <input
                                className='w-[5rem] bg-gray-200 rounded-full px-2'
                                type="text"
                                onChange={handleChange}
                                name='breakService'
                                value={input.breakService} />
                        </td>
                        <td>
                            <input
                                className='w-[5rem] bg-gray-200 rounded-full px-2'
                                type="text"
                                onChange={handleChange}
                                name='suspensionAndWheelService'
                                value={input.suspensionAndWheelService} />
                        </td>
                        <td>
                            {listHistory?.order.vehicle.createdAt.split("T")[0]}
                        </td>
                        <th></th>
                        <td>
                            <div onClick={handleSubmit}>
                                <FaFileUpload className='size-[1.5rem]' />

                            </div>
                        </td>
                    </form >
                </tr >

            ) : (
                <tr>
                    <th>{index + 1}</th>
                    <td>{listHistory?.order.vehicle.plateNumber}</td>
                    <td>{listHistory?.order.vehicle.brand}</td>
                    <td>{listHistory?.order.vehicle.model}</td>
                    <td>{listHistory?.order.vehicle.engineService}</td>
                    <td>{listHistory?.order.vehicle.fluidService}</td>
                    <td>{listHistory?.order.vehicle.bodyService}</td>
                    <td>{listHistory?.order.vehicle.electricalService}</td>
                    <td>{listHistory?.order.vehicle.breakService}</td>
                    <td>{listHistory?.order.vehicle.suspensionAndWheelService}</td>
                    <td>{listHistory?.order.vehicle.createdAt.split("T")[0]}</td>
                    <td>
                        <div onClick={() => setIsEdit(true)}>
                            <BiEdit className='size-[1.5rem]' />
                        </div>
                    </td>
                </tr>

            )



            }
        </>
    )
}
