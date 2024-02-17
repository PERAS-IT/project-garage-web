import React from 'react'
import CarCardContainer from './CarCardContainer'
import Button from '../../../components/Button'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import CarCreateForm from './CarCreateForm'

export default function CreateCarContainer() {
    const [isShowCreate, setIsShowCreate] = useState(false)

    const handleClick = () => {
        setIsShowCreate(true)
    }

    return (
        <>

            <div className='mt-[7rem] text-center' >
                <Button className='z-50' width={"lg"} background={"red"} color={"white"} onClick={handleClick}>
                    Add Your car
                </Button>
                {isShowCreate &&
                    <Modal
                        width={60}
                        title={"Create Your Car"}
                    // onClose={() => setIsShowCrate(false)}
                    >
                        <CarCreateForm onClose={() => setIsShowCreate(false)} />
                    </Modal>
                }
                <CarCardContainer />
            </div>
        </>
    )
}
