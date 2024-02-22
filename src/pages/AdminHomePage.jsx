import React from 'react'
import LinkCardAdmin from '../components/LinkCardAdmin'
import Header from '../layout/Header'
import { Link } from 'react-router-dom'
import search from '../assets/search.png'
import main from '../assets/main.png'
import History from '../assets/History.png'


import Button from '../components/Button'


import CardRequest from '../features/Admin/components/CardRequest'
import CardService from '../features/Admin/components/CardService'
import CardComplete from '../features/Admin/components/CardComplete'
import CardSevenDayRequest from '../features/Admin/components/CardSevenDayRequest'
import CardSevenDayService from '../features/Admin/components/CardSevenDayService'
import CarSevenDayComplete from '../features/Admin/components/CarSevenDayComplete'
import { useState } from 'react'
import CardComponent from '../components/CardComponents'
import SearchBar from '../features/Admin/page2/components/SearchBar'
import TableOrder from '../features/Admin/page2/components/TableOrder'



export default function AdminHomePage() {

    const [currentPage, setCurrent] = useState(1)


    return (
        <div>
            <Header>
                <Link to={'/login'}>
                    <Button background={"red"} width={"md"} color={"white"}>
                        Log out
                    </Button>
                </Link>
            </Header>
            {
                currentPage == 1 &&
                <div>
                    <div className='flex justify-around mt-5'>
                        <LinkCardAdmin image={main} title={"Dash Board"} color={"red-300"} onClick={() => setCurrent(1)} />
                        <LinkCardAdmin image={search} title={"Update Status"} onClick={() => setCurrent(2)} />
                        <LinkCardAdmin image={History} title={"history"} onClick={() => setCurrent(2)} />
                    </div>
                    <div className='flex flex-col gap-8 mt-10'>
                        <div className='flex justify-center gap-8'>
                            <CardSevenDayRequest />
                            <CardRequest />
                        </div>
                        <div className='flex justify-center gap-8'>
                            <CardSevenDayService />
                            <CardService />
                        </div>
                        <div className='flex justify-center gap-8'>
                            <CarSevenDayComplete />
                            <CardComplete />
                        </div>


                    </div>
                </div>
            }
            {
                currentPage == 2 &&
                <div>
                    <div className='flex justify-around mt-5'>
                        <LinkCardAdmin image={main} title={"Dash Board"} onClick={() => setCurrent(1)} />
                        <LinkCardAdmin image={search} title={"Update Status"} color={"red-300"} onClick={() => setCurrent(2)} />
                        <LinkCardAdmin image={History} title={"history"} onClick={() => setCurrent(3)} />
                    </div>
                    <div className='mt-[3rem] flex items-center flex-col'>
                        <SearchBar></SearchBar>
                        <TableOrder></TableOrder>
                    </div>
                </div>

            }
            {
                currentPage == 3 &&
                <div>
                    <div className='flex justify-around mt-5'>
                        <LinkCardAdmin image={main} title={"Dash Board"} onClick={() => setCurrent(1)} />
                        <LinkCardAdmin image={search} title={"Update Status"} onClick={() => setCurrent(2)} />
                        <LinkCardAdmin image={History} title={"history"} color={"red-300"} onClick={() => setCurrent(3)} />
                    </div>
                </div>

            }
        </div>
    )
}
