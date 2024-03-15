import React from 'react'
import useSearchHistory from '../hooks/useSearchHistory'
import ListHistoryTable from './ListHistoryTable'


export default function TableHistory() {
    const { listOfHistory } = useSearchHistory()
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
                            <th>Engine Service</th>
                            <th>Fluid Service</th>
                            <th>BodyService</th>
                            <th>Electrical Service</th>
                            <th>breakService</th>
                            <th>Suspension And Wheel Service</th>
                            <th>CreatedAt</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-hidden'>
                        {listOfHistory.map((list, i) => <ListHistoryTable key={i} listHistory={list} index={i} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
