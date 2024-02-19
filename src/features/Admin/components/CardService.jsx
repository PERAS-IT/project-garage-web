import React from 'react'
import CardComponent from '../../../components/CardComponents'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import ItemService from './ItemService'

export default function CardService() {
    return (
        <>
            <CardComponent width={30} height={20} >
                <div>
                    <h1 className='text-[2rem]'>In Service</h1>
                </div>
                <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                    <ItemService />
                    <ItemService />
                    <ItemService />

                </div>
            </CardComponent>
        </>
    )
}
