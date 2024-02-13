import { useState } from 'react';
import { createContext } from 'react'
import * as authApi from "../../../api/auth"
import { storeToken } from '../../../utility/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [AuthUser, setAuthUser] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)

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

    return (
        <AuthContext.Provider value={{ login, register }}>
            {children}
        </AuthContext.Provider>
    )
}

