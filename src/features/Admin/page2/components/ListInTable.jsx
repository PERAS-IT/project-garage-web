import React from 'react'
import useSearchOrder from '../hooks/useSearchOrder'
import { BiEdit } from "react-icons/bi";
import { useState } from 'react';

export default function ListInTable({ list, index }) {
    const [isEdit, setIsEdit] = useState()
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{list.vehicle.plateNumber}</td>
                <td>{list.vehicle.brand}</td>
                <td>{list.vehicle.model}</td>
                <td>{list.categoryService}</td>
                <td>{list.detailRequest}</td>
                <td>{list.statusOrder}</td>
                <td>{list.createdAt.split("T")[0]}</td>
                <td><BiEdit /></td>
            </tr>
            {isEdit &&
                <tr>
                    <th>{index + 1}</th>
                    <td>{list.vehicle.plateNumber}</td>
                    <td>{list.vehicle.brand}</td>
                    <td>{list.vehicle.model}</td>
                    <td>{list.categoryService}</td>
                    <td>{list.detailRequest}</td>
                    <td>{list.statusOrder}</td>
                    <td>{list.createdAt.split("T")[0]}</td>
                    <td><BiEdit /></td>
                </tr>


            }
        </>
    )
}
