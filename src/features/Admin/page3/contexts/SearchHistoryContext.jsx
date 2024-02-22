import React from 'react'
import { createContext } from 'react'
import * as adminApi from '../../../../api/admin'
import { useEffect } from 'react'

export const searchHistoryContext = createContext()

export default function SearchHistoryContextProvider({ children }) {
    const [listOfHistory, setListOfHistory] = useState([])

    // useEffect(() => {
    //     fetchListOrder()
    // }, [])

    const fetchListHistory = async () => {
        try {
            const resultListOrder = await adminApi.getListHistory()
            setListOfHistory(resultListOrder)
        } catch (error) {

        }
    }

    const searchHistoryByFilter = async () => {
        try {

        } catch (error) {

        }
    }


    return (
        <SearchHistoryContext.Provider
            value={{
                listOfHistory,
                searchHistoryByFilter
            }}>
            {children}
        </SearchHistoryContext.Provider>
    )
}
