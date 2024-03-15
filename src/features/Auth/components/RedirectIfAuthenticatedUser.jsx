import React from 'react'
import useAuth from '../../../hooks/use-auth'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuthenticatedUser({ children }) {
    const { authAdmin, authUser } = useAuth()
    if (authAdmin) return <Navigate to='/admin' />
    if (authUser) return <Navigate to='/user' />
    return children;
}
