import React from 'react'
import { useState } from 'react'
import CardComponent from '../../../../components/CardComponents'
import Button from '../../../../components/Button'
import useSearchHistory from '../hooks/useSearchHistory'
import validateDateHistory from '../Validation/validate-searchHistory'
import { toast } from 'react-toastify'

export default function SearchBarHistory() {
    const defaultValue = {

        "startDate": '',
        "endDate": '',
    }
    const [input, setInput] = useState(defaultValue)
    const [error, setError] = useState({})
    const { searchOrderByFilter, setDateForSearch, searchHistoryByFilter } = useSearchHistory()


    const handleChange = (e) => {
        setError({})
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleReset = () => {
        setInput(defaultValue)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        const valiDateError = validateDateHistory(input)

        if (valiDateError) return setError(valiDateError)
        try {
            console.log(input)
            await searchHistoryByFilter(input.startDate, input.endDate)

            setDateForSearch(input);
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
