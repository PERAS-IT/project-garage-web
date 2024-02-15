import React from 'react'
import CarCardContainer from './CarCardContainer'
import Button from '../../../components/Button'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import CarCreateForm from './CarCreateForm'

export default function CreateCarContainer() {
    const [isShow, setIsShow] = useState(false)
    const handleClick = () => {
        console.log("1")
        setIsShow(true)
    }
    console.log(isShow)
    return (
        <>

            <div className='mt-[7rem] text-center' >
                <Button className='z-50' width={"lg"} background={"red"} color={"white"} onClick={handleClick}>
                    Add Your car
                </Button>
                {isShow &&
                    <Modal
                        title={"Create Your Car"}
                        onClose={() => setIsShow(false)}
                    >
                        <CarCreateForm onClose={() => setIsShow(false)} />
                    </Modal>
                }
                <CarCardContainer />
            </div>
        </>
    )
}
