import React from 'react'
import CardComponent from '../../../components/CardComponents';
import ItemRequest from './ItemRequest';

export default function CardRequest() {

    return (
        <>
            <CardComponent width={30} height={20} >
                <div>
                    <h1 className='text-[2rem]'>User Request Order</h1>
                </div>
                <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                    <ItemRequest />
                    <ItemRequest />
                    <ItemRequest />
                </div>
            </CardComponent>
        </>
    )
}
