import React from 'react'

export default function RedirectIfAuthenticatedAdmin({ }) {
    const { authUser } = useAuth()
    return authUser ? { children } : <Navigate to='/Home' />
}
