import React from 'react'
import useAuth from '../../../hooks/use-auth'

export default function RedirectIfAuthenticatedUser({ children }) {
    const { authUser } = useAuth()
    return authUser ? <Navigate to='/user' /> : <Navigate to='/' />
}
