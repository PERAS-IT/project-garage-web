import React from 'react'
import Button from '../../../components/Button'

export default function TableHistory({ onClose }) {
    return (
        <>
            <div className='p-5'>

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
                            {/* {listOfHistory.map((list, i) => <ListHistoryTable key={i} list={list} index={i} />)} */}
                        </tbody>
                    </table>
                </div>
                <Button onClick={onClose} type={"button"}>
                    close
                </Button>
            </div>
        </>
    )
}
