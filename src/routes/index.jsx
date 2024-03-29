import { createBrowserRouter } from 'react-router-dom'
import Spinner from '../components/Spinner'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Container from '../layout/Container'
import RegisterPage from '../pages/RegisterPage'
import { RouterProvider } from 'react-router-dom'
import UserPage from '../pages/UserPage'
import AdminHomePage from '../pages/AdminHomePage'
import ProtectedRoute from '../features/Auth/components/ProtectedRoute'
import RedirectIfAuthenticatedUser from '../features/Auth/components/RedirectIfAuthenticatedUser'
import AdminContextProvider from '../features/Admin/contexts/AdminContext'
import ProtectedRouteAdmin from '../features/Auth/components/ProtextRouteAdmin'
import SearchOrderContextProvider from '../features/Admin/page2/contexts/SearchOrderContext'
import SearchHistoryContextProvider from '../features/Admin/page3/contexts/SearchHistoryContext'

const router = createBrowserRouter([

    {
        path: '/spinner',
        element: (
            <Spinner />
        )
    },
    {
        path: `/`, element: <HomePage />
    },
    {
        path: '/Register', element: <RegisterPage />
    },
    {
        path: '/login',
        element: (
            <RedirectIfAuthenticatedUser>

                <LoginPage />

            </RedirectIfAuthenticatedUser>
        )
    },

    {
        path: '/user', element: (
            <ProtectedRoute>
                <UserPage />
            </ProtectedRoute>
        )
    },
    {
        path: '/admin', element: (
            <ProtectedRouteAdmin>
                <AdminContextProvider>
                    <SearchOrderContextProvider>
                        <SearchHistoryContextProvider>
                            <AdminHomePage />
                        </SearchHistoryContextProvider>
                    </SearchOrderContextProvider>
                </AdminContextProvider>
            </ProtectedRouteAdmin>
        )
    },

])


export default function Router() {
    return <RouterProvider router={router} />
}