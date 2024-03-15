import React from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import CardComponent from '../../../components/CardComponents'
import BarChart from '../../../components/BarChart'
import { useState } from 'react'
import useAdminContext from '../hooks/useAdminContext'


export default function CarSevenDayComplete() {
    const { completeSevenDay } = useAdminContext()
    return (
        <CardComponent width={30} height={20} >
            <div className='flex flex-col'>
                <h1 className='text-[1.7rem]'>Complete Work In Seven Day</h1>
                <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                    <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                        <BarChart chartData={completeSevenDay} />
                    </div>
                </div>
            </div>
        </CardComponent>
    )
}
