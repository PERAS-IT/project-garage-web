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
        path: `/`,
        element: (
            <Container />
        ),
        children: [

            {
                path: '/user', element: <UserPage />
            },
            {
                path: '/admin', element: <AdminHomePage />
            },
        ]
    }])


export default function Router() {
    return <RouterProvider router={router} />
}