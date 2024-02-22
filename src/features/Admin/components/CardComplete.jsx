import React from 'react'
import CardComponent from '../../../components/CardComponents'
import { FaCar } from 'react-icons/fa6'
import ItemComplete from './ItemComplete'
import useAdminContext from '../hooks/useAdminContext'

export default function CardComplete() {
  const { completeList } = useAdminContext()
  return (
    <>
      <CardComponent width={30} height={20} >
        <div className='flex items-center gap-6 '>
          <h1 className='text-[2rem]'>Wait receive</h1>
          <div className='bg-[#9AD9A0] size-8 rounded-full flex justify-center items-center text-white shadow-2xl'>{completeList.length}</div>
        </div>
        <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
          {completeList.length > 0
            ?
            completeList.map((order, i) => <ItemComplete key={i} order={order} />)
            : ""}

        </div>
      </CardComponent>

    </>
  )
}
