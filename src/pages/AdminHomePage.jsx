import React from 'react'
import LinkCardAdmin from '../components/LinkCardAdmin'
import Header from '../layout/Header'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CardComponent from '../components/CardComponents'

import CardRequest from '../features/Admin/components/CardRequest'
import CardService from '../features/Admin/components/CardService'
import CardComplete from '../features/Admin/components/CardComplete'



export default function AdminHomePage() {
    return (
        <div>
            <Header>
                <Link to={'/login'}>
                    <Button background={"red"} width={"md"} color={"white"}>
                        Log out
                    </Button>
                </Link>
            </Header>
            <div className='flex justify-around mt-5'>
                <LinkCardAdmin />
                <LinkCardAdmin />
                <LinkCardAdmin />
            </div>
            <div className='flex flex-col gap-8 mt-10'>
                <div className='flex justify-center gap-8'>
                    <CardComponent width={30} height={20} >

                    </CardComponent>
                    <CardRequest />
                </div>
                <div className='flex justify-center gap-8'>
                    <CardComponent width={30} height={20} />
                    <CardService />
                </div>
                <div className='flex justify-center gap-8'>
                    <CardComponent width={30} height={20} />
                    <CardComplete />
                </div>


            </div>
        </div>
    )
}
