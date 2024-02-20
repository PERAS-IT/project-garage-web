import React from 'react'
import CardComponent from '../../../components/CardComponents';
import ItemRequest from './ItemRequest';
import useAdminContext from '../hooks/useAdminContext';



export default function CardRequest() {
    const { requestList } = useAdminContext()
    return (
        <>
            <CardComponent width={30} height={20} >
                <div>
                    <h1 className='text-[2rem]'>User Request Order</h1>
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
