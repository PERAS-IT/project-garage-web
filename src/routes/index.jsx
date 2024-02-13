import { createBrowserRouter } from 'react-router-dom'
import Spinner from '../components/Spinner'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Container from '../layout/Container'
import RegisterPage from '../pages/RegisterPage'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

    {
        path: '/spinner',
        element: (
            <Spinner />
        )
    },
    {
        path: `/`,
        element: (
            <Container />
        ),
        children: [
            {
                path: `/`, element: <HomePage />
            },
            {
                path: '/login', element: <LoginPage />
            },
            {
                path: '/Register', element: <RegisterPage />
            }
        ]

    }
])


export default function Router() {
    return <RouterProvider router={router} />
}