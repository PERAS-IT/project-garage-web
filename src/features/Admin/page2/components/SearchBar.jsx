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

    // const status = [
    //     "All",
    //     "pending",
    //     "reject",
    //     "inService",
    //     "waitingReceive",
    //     "complete",]
    // const category = [
    //     "All",
    //     "general",
    //     "accident"
    // ]

    const { searchOrderByFilter } = useSearchOrder()
    const [input, setInput] = useState(defaultValue)
    const [error, setError] = useState({})



    const handleChange = (e) => {
        setError({})
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleReset = () => {
        setInput(defaultValue)
    }


    const handleSearch = async (e) => {
        e.preventDefault();
        const valiDateError = validateDate(input)
        console.log(valiDateError)
        console.log(input)
        if (valiDateError) return setError(valiDateError)
        try {

            await searchOrderByFilter(input.startDate, input.endDate)
            toast.success("Search Success")
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data.message)
        } finally {

        }

    }

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
