import { useState } from "react";
import { createContext } from "react";
import * as userCarApi from "../../../api/userCar"
import { useEffect } from "react";

export const CarActionContext = createContext();
export default function CarActionContextProvider({ children }) {
    const [cars, setCars] = useState([]);

    // useEffect(async () => {
    //     try {
    //         if (cars) {
    //             // const result = await userCarApi.getAllCar()
    //             setCars(result.data.cars)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    const createCar = async formData => {
        await userCarApi.createCar(formData);
    }




    return (
        <CarActionContext.Provider value={{ cars, createCar }}>
            {children}
        </CarActionContext.Provider>
    )
}