import React from 'react'
import CarCardNewCar from './CarCardNewCar'
import CarCardInService from './CarCardInService'
import useCarAction from '../hooks/car-action'


export default function CarCardContainer() {
    const { cars } = useCarAction()
    return (
        <div className='mt-[5rem] flex  flex-col justify-center gap-[4rem] items-center'>
            {/* this page for render card  and check status card on stage */}
            {cars.map(car => (car.orders.length == 0) ? <CarCardNewCar key={car.id} car={car} /> : <CarCardInService key={car.id} car={car} />)}
        </div>
    )
}
