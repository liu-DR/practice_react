import { Navigate, useRoutes } from "react-router-dom";
import Login from './login/Login'
import route from './routes'
import { RouteObject } from './data'
import React from "react";


const rootRouter: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: '/login',
        element: <Login />,
        key: 'login'
    },
    ...route
]

const Route = () => {
    const routes = useRoutes(rootRouter)
    return routes
}

export default Route

