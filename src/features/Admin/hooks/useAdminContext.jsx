
import { useContext } from 'react'
import { AdminContext } from '../contexts/AdminContext'

export default function useAdminContext() {
    return useContext(AdminContext)
}
