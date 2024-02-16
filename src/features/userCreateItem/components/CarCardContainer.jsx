import React from 'react'
import CarCardNewCar from './CarCardNewCar'
import CarCardInService from './CarCardInService'


export default function CarCardContainer() {
    return (
        <div className='mt-[5rem] flex  flex-col justify-center gap-[4rem] items-center'>
            {/* this page for render card  and check status card on stage */}
            <CarCardNewCar />
            <CarCardInService />
        </div>
    )
}
