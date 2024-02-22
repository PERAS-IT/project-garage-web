import React from 'react'
import CardComponent from '../../../components/CardComponents'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import BarChart from '../../../components/BarChart'
import { useState } from 'react'
import useAdminContext from '../hooks/useAdminContext'

export default function CardSevenDayService() {
    const { serviceSevenDay } = useAdminContext()
    return (
        <CardComponent width={30} height={20} >
            <div>
                <h1 className='text-[2rem]'>Service in seven day </h1>
                <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                    <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                        <BarChart chartData={serviceSevenDay} />
                    </div>
                </div>
            </div>
        </CardComponent>
    )
}
