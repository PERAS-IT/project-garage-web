import React from 'react'

export default function RedirectIfAuthenticatedAdmin({ }) {
    const { authUser } = useAuth()
    return authUser ? <Navigate to='/user' /> : <Navigate to='/' />
}
