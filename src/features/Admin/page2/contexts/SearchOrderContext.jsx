import React from 'react'
import { createContext } from 'react'
import * as adminApi from '../../../../api/admin'
import { useState } from 'react'

export const SearchContext = createContext()

export default function SearchOrderContextProvider({ children }) {
  const [listOfOrder, setListOfOrder] = useState([])


  const searchOrderByFilter = async (startDate, endDate) => {
    try {
      const result = await adminApi.searchListOrder(startDate, endDate)
      console.log(result.data.result)
      setListOfOrder(result.data.result)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SearchContext.Provider
      value={{
        listOfOrder,
        searchOrderByFilter
      }}>
      {children}
    </SearchContext.Provider>
  )
}
