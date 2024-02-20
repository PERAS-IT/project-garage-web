
import { useEffect } from 'react';
import { useState } from 'react'
import { createContext } from 'react'
import * as adminApi from '../../../api/admin'

export const AdminContext = createContext()

export default function AdminContextProvider({ children }) {
    const [requestList, setRequestList] = useState([]);
    const [requestSevenDay, setRequestSevenDay] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [serviceSevenDay, setServiceSevenDay] = useState([]);
    const [completeList, setCompleteList] = useState([]);
    const [completeSevenDat, setCompleteSevenDay] = useState([])

    const fetchRequest = async () => {
        try {
            const resultList = await adminApi.getRequestList()
            setRequestList(resultList.data.result)
            // const resultInSevenDay = await adminApi.getRequestInSevenDay();
            // setRequestSevenDay(resultInSevenDay)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchService = async () => {
        try {
            const resultList = await adminApi.getServiceList();
            console.log(resultList.data.result)
            setServiceList(resultList.data.result)
            // const resultInSevenDay = await adminApi.getServiceInSevenDay();
            // setServiceSevenDay(resultInSevenDay)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchComplete = async () => {
        try {
            const resultList = await adminApi.getCompleteList();
            setCompleteList(resultList.data.result)
            // const resultInSevenDay = await adminApi.getCompleteInSevenDay();
            // setCompleteSevenDay(resultInSevenDay)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchSevenDay = async () => {
        try {
            const chartListRequest = await adminApi.getRequestInSevenDay();
            const chartListService = await adminApi.getServiceInSevenDay();
            const chartListComplete = await adminApi.getCompleteInSevenDay();
            setRequestSevenDay(chartListRequest.data.result)
            setServiceSevenDay(chartListService.data.result)
            setCompleteSevenDay(chartListService.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (requestList.length === 0) { fetchRequest() }
        if (serviceList.length === 0) { fetchService() }
        if (completeList.length === 0) { fetchComplete() }
        fetchSevenDay()
    }, [])


    const updateRequest = async (orderId) => {
        await adminApi.updateRequestService(orderId)
        fetchRequest()
        fetchService()
        fetchSevenDay()
    }
    const updateService = async (orderId) => {
        await adminApi.updateService(orderId)
        fetchService()
        fetchComplete()
        fetchSevenDay()
    }
    const updateComplete = async (orderId) => {
        await adminApi.updateComplete(orderId)
        fetchComplete()
        fetchSevenDay()
    }


    return (
        <AdminContext.Provider
            value={{
                requestList,
                serviceList,
                completeList,
                updateRequest,
                updateService,
                updateComplete,
                requestSevenDay,
                serviceSevenDay,
                completeSevenDat

            }}>
            {children}
        </AdminContext.Provider>
    )
}
