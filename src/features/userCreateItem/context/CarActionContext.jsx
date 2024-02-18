import { useState } from "react";
import { createContext } from "react";
import * as userCarApi from "../../../api/userCar"
import { useEffect } from "react";
import { toast } from "react-toastify";

export const CarActionContext = createContext();
export default function CarActionContextProvider({ children }) {

    const [cars, setCars] = useState([]);

    const fetchData = async () => {
        try {
            const result = await userCarApi.getAllCar()
            console.log(result.data.cars)
            setCars(result.data.cars)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const createCar = async formData => {
        console.log(formData.getAll("data"))
        await userCarApi.createCar(formData);
        fetchData()
    }

    const deleteCar = async id => {
        await userCarApi.deleteCar(id)
        fetchData()
    }

    const requestServiceById = async (id, formData) => {
        await userCarApi.requestServiceCar(id, formData)
        fetchData()
    }

    const editCarById = async (id, newProfileObj) => {
        await userCarApi.editCar(id, newProfileObj)
        fetchData()
    }


    return (
        <CarActionContext.Provider
            value={{
                cars,
                createCar,
                deleteCar,
                requestServiceById,
                editCarById
            }}>
            {children}
        </CarActionContext.Provider>
    )
}