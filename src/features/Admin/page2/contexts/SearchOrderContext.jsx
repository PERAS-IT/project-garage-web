import React from 'react'
import { createContext } from 'react'
import * as adminApi from '../../../../api/admin'
import { useState } from 'react'

export const SearchContext = createContext()

export default function SearchOrderContextProvider({ children }) {
  const [listOfOrder, setListOfOrder] = useState([])
  const [dateForSearch, setDateForSearch] = useState()

  const fetchData = async () => {
    const result = await adminApi.searchListOrder(dateForSearch.startDate, dateForSearch.endDate)
    setListOfOrder(result.data.result)
  }

  const searchOrderByFilter = async (startDate, endDate) => {
    try {
      const result = await adminApi.searchListOrder(startDate, endDate)
      setListOfOrder(result.data.result)
    } catch (error) {
      console.log(error)
    }
  }
  const editOrderStatus = async (id, newProfileObj) => {
    await adminApi.updateStatusOrder(id, newProfileObj)
    fetchData()
  }


  return (
    <SearchContext.Provider
      value={{
        listOfOrder,
        searchOrderByFilter,
        setDateForSearch,
        editOrderStatus
      }}>
      {children}
    </SearchContext.Provider>
  )
}
