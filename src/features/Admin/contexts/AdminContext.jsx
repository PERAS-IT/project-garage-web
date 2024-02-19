
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
            setRequestList(resultList)
            const resultInSevenDay = await adminApi.getRequestInSevenDay();
            setRequestSevenDay(resultInSevenDay)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchService = async () => {
        try {
            const resultList = await adminApi.getServiceList();
            setServiceList(resultList)
            const resultInSevenDay = await adminApi.getServiceInSevenDay();
            setServiceSevenDay(resultInSevenDay)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchComplete = async () => {
        try {
            const resultList = await adminApi.getCompleteList();
            setCompleteList(resultList)
            const resultInSevenDay = await adminApi.getCompleteInSevenDay();
            setCompleteSevenDay(resultInSevenDay)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRequest()
        fetchService()
        fetchComplete()
    }, [])


    const handleUpdateRequest = async (orderId) => {
        await adminApi.updateRequestService(orderId)
        fetchRequest()
    }
    const handleUpdateService = async (orderId) => {
        await adminApi.updateRequestService(orderId)
        fetchService()
    }
    const handleUpdateComplete = async (orderId) => {
        await adminApi.updateRequestService(orderId)
        fetchComplete()
    }

    return (
        <AdminContext.Provider value={handleUpdateRequest}>
            {children}
        </AdminContext.Provider>
    )
}
