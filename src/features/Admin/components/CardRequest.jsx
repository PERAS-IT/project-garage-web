import React from 'react'
import CardComponent from '../../../components/CardComponents';
import ItemRequest from './ItemRequest';
import useAdminContext from '../hooks/useAdminContext';



export default function CardRequest() {
    const { requestList } = useAdminContext()
    return (
        <>
            <CardComponent width={30} height={20} >
                <div className='flex items-center gap-6 '>
                    <h1 className='text-[2rem]'>User Request Order</h1>
                    <div className='bg-[#26AEB7] size-8 rounded-full flex justify-center items-center text-white shadow-2xl'>{requestList.length}</div>
                </div>

                <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
                    {requestList.length > 0
                        ?
                        requestList.map((order, i) => <ItemRequest key={i} order={order} />)
                        : ""}
                </div>
            </CardComponent>
        </>
    )
}
