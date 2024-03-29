import React from 'react'
import useSearchOrder from '../hooks/useSearchOrder'
import ListInTable from './ListInTable'


export default function TableOrder() {
    const { listOfOrder } = useSearchOrder()
    return (
        <>
            <div className="overflow-x-auto h-[20rem] m-[5rem]">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-300">
                            <th></th>
                            <th>Plate Number</th>
                            <th>brand</th>
                            <th>Model</th>
                            <th>Category service</th>
                            <th>Detail Request</th>
                            <th>status order</th>
                            <th>Request Service Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-hidden'>
                        {listOfOrder.map((list, i) => <ListInTable key={i} list={list} index={i} />)}
                    </tbody>
                </table>
            </div>
            {/* {listOfOrder.length > 0
                &&
                } */}
            {/* {listOfOrder.map((order) => <ListInTable />)} */}
        </>

    )
}
