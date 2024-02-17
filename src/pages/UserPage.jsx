import React from 'react'
import Header from '../layout/Header'
import Title from '../layout/Title'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CreateCarContainer from '../features/userCreateItem/components/CreateCarContainer'
import CarActionContextProvider from '../features/userCreateItem/context/CarActionContext'


export default function UserPage() {
    return (
        <div>
            <Header>
                <Link to={'/login'}>
                    <Button background={"red"} width={"md"} color={"white"}>
                        Log out
                    </Button>
                </Link>
            </Header>
            <Title textTitle={'Your Garage'} />
            <CarActionContextProvider>
                <CreateCarContainer />
            </CarActionContextProvider>
        </div>
    )
}
