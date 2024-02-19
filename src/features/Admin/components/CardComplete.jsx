import React from 'react'
import CardComponent from '../../../components/CardComponents'
import { FaCar } from 'react-icons/fa6'
import ItemComplete from './ItemComplete'

export default function CardComplete() {

  return (
    <>
      <CardComponent width={30} height={20} >
        <div>
          <h1 className='text-[2rem]'>User Request Order</h1>
        </div>
        <div className='w-full h-[15rem] flex flex-col gap-3 overflow-x-hidden '>
          <ItemComplete />
          <ItemComplete />
          <ItemComplete />
        </div>
      </CardComponent>

    </>
  )
}
