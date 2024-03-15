import { useState } from 'react';
import { createContext } from 'react'
import * as authApi from "../../../api/auth"
import { clearToken, storeToken, getToken, storeTokenAdmin, clearTokenAdmin, getTokenAdmin } from '../../../utility/local-storage';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null)
    const [authAdmin, setAuthAdmin] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)

    useEffect(() => {
        if (getToken()) {
            authApi.fetchMe()
                .then(res => {
                    setAuthUser(res.data.user)
                })
                .catch(err => {
                    toast.error(err.response?.data.message)

                }).finally(() => setInitialLoading(false));

        }
        if (getTokenAdmin()) {
            authApi.fetchAdmin()
                .then(res => {
                    setAuthAdmin(res.data.admin)
                })
                .catch(err => {
                    toast.error(err.response?.data.message)

                }).finally(() => setInitialLoading(false));
        }
        else {
            setInitialLoading(false)
        }
    }, []);


    const register = async (user) => {
        const result = await authApi.register(user);
        setAuthUser(result.data.user);
        storeToken(result.data.accessToken);
    }
    const login = async (credential) => {
        const result = await authApi.login(credential);
        setAuthUser(result.data.user);
        storeToken(result.data.accessToken);
    }

    const loginAdmin = async (credential) => {
        const result = await authApi.loginAdmin(credential)
        setAuthAdmin(result.data.user);
        storeTokenAdmin(result.data.accessToken)
    }
    const logOut = async () => {
        setAuthUser(null)
        setAuthAdmin(null)
        clearToken()
        clearTokenAdmin()
    }
    return (
        <AuthContext.Provider value={{ authUser, authAdmin, login, register, loginAdmin, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

