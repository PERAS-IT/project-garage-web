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
        <div>
          <h1 className='text-[2rem]'>Wait receive </h1>
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
