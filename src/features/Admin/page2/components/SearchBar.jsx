import React from 'react'
import CardComponent from '../../../../components/CardComponents'
import Button from '../../../../components/Button'
import { useState } from 'react'
import validateDate from '../Validation/validate-searchOrder'
import useSearchOrder from '../hooks/useSearchOrder'
import { toast } from 'react-toastify'


// const defaultDate = new Date()

const defaultValue = {

    "startDate": '',
    "endDate": '',
}

export default function SearchBar() {

    const { searchOrderByFilter, setDateForSearch } = useSearchOrder()
    const [input, setInput] = useState(defaultValue)
    const [error, setError] = useState({})



    const handleChange = (e) => {
        setError({})
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleReset = () => {
        setInput(defaultValue)
    }


    CarActionContext

    return (
        <>
            <CardComponent width={40} height={12} bg={"gray"}>
                <form className='flex flex-col gap-5 items-center' onSubmit={handleSearch} >
                    <div className='flex gap-3'>
                        <label>start Date</label>
                        <input type="date" value={input.startDate} name="startDate" onChange={handleChange} />
                        <label>End Date</label>
                        <input type="date" value={input.endDate} name="endDate" onChange={handleChange} />
                    </div>
                    <div>
                        {error.startDate ? (
                            <small className="text-red-400">{error.startDate}</small>
                        ) : null}
                        {error.endDate ? (
                            <small className="text-red-400">{error.endDate}</small>
                        ) : null}
                    </div>
                    <div className='flex gap-10'>
                        <Button width={"md"} background={"green"} type={"submit"} >
                            Search
                        </Button>
                        <Button width={"md"} type={'button'} onClick={handleReset}>
                            Refresh
                        </Button>
                    </div>
                </form>
            </CardComponent >
        </>
    )
}
