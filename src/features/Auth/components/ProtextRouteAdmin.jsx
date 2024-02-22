import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/use-auth';

export default function ProtectedRouteAdmin({ children }) {
    const { authAdmin } = useAuth();
    return authAdmin ? children : <Navigate to='/login' />
}
