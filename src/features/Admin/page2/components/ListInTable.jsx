import React from 'react'
import useSearchOrder from '../hooks/useSearchOrder'
import { BiEdit } from "react-icons/bi";
import { useState } from 'react';
import { FaFileUpload } from "react-icons/fa";

export default function ListInTable({ list, index }) {
    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState(list)

    const status = ["pending",
        "reject",
        "inService",
        "waitingReceive",
        "complete"]
    const categoryService = ["general", "accident"];

    const { editOrderStatus } = useSearchOrder()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        try {
            await editOrderStatus(list.id, input)
            setIsEdit(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data.message)
        }
        onclose()
    }

    return (
        <>
            {isEdit ? (
                <tr className='bg-[#26AEB7]'>
                    <th>{index + 1}</th>
                    <td>{list.vehicle.plateNumber}</td>
                    <td>{list.vehicle.brand}</td>
                    <td>{list.vehicle.model}</td>
                    <form onSubmit={handleSubmit}></form>
                    <td>
                        <select
                            className='py-2 px-4 rounded-xl mt-2'
                            onChange={handleChange}
                            value={input.categoryService}
                            name='categoryService'>
                            {categoryService.map((el, i) =>
                                <option key={i} value={el}>
                                    {el}
                                </option>)}
                        </select>
                    </td>
                    <td>
                        <input
                            className='w-[5rem] bg-gray-200 rounded-full px-2'
                            type="text"
                            onChange={handleChange}
                            name='detailRequest'
                            value={input.detailRequest} />
                    </td>
                    <td>
                        <select
                            className='py-2 px-4 rounded-xl mt-2'
                            onChange={handleChange}
                            value={input.statusOrder}
                            name='status'>
                            {status.map((el, i) =>
                                <option key={i} value={el}>
                                    {el}
                                </option>)}
                        </select>
                    </td>
                    <td>{list.createdAt.split("T")[0]}</td>
                    <td>
                        <div onClick={handleSubmit}>
                            <FaFileUpload className='size-[1.5rem]' />

                        </div>
                    </td>
                </tr>

            ) : (
                <tr>
                    <th>{index + 1}</th>
                    <td>{list.vehicle.plateNumber}</td>
                    <td>{list.vehicle.brand}</td>
                    <td>{list.vehicle.model}</td>
                    <td>{list.categoryService}</td>
                    <td>{list.detailRequest}</td>
                    <td>{list.statusOrder}</td>
                    <td>{list.createdAt.split("T")[0]}</td>
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
