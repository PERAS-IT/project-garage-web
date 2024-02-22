import React from 'react'
import CardComponent from '../../../components/CardComponents'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import ItemService from './ItemService'
import useAdminContext from '../hooks/useAdminContext'

export default function CardService() {

    const { serviceList } = useAdminContext()
    return (
        <>
            <CardComponent width={30} height={20} >
                <div className='flex items-center gap-6 '>
                    <h1 className='text-[2rem]'>In Service</h1>
                    <div className='bg-yellow-400 size-8 rounded-full flex justify-center items-center text-white shadow-2xl'>{serviceList.length}</div>
                </div>
                <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                    {serviceList.length > 0
                        ?
                        serviceList.map((order, i) => <ItemService key={i} order={order} />)
                        : ""}


                </div>
            </CardComponent>
        </>
    )
}
