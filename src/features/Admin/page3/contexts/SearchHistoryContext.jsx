import React from 'react'
import { createContext } from 'react'
import * as adminApi from '../../../../api/admin'
import { useEffect } from 'react'
import { useState } from 'react'

export const SearchHistoryContext = createContext()

export default function SearchHistoryContextProvider({ children }) {
    const [listOfHistory, setListOfHistory] = useState([])
    const [dateForSearch, setDateForSearch] = useState([])
    // useEffect(() => {
    //     fetchListOrder()
    // }, [])


    const searchHistoryByFilter = async (startDate, endDate) => {
        try {
            const resultListOrder = await adminApi.getListHistory(startDate, endDate)
            setListOfHistory(resultListOrder.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    const editHistory = async (id, newHistoryObj) => {

    }

    return (
        <SearchHistoryContext.Provider
            value={{
                listOfHistory,
                searchHistoryByFilter,
                setDateForSearch
            }}>
            {children}
        </SearchHistoryContext.Provider>
    )
}
