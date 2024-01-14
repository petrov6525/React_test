import * as React from 'react';
import {createBrowserRouter, Router} from "react-router-dom";
import {Login} from "../pages/login/login";
import {Users} from "../pages/users/users";
import {PrivateRoute} from "./privateRoute";
import {EditUser} from "../pages/editUser/editUser";
import ErrorPage from "../pages/errorPage/errorPage";


export const defaultRouter = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute>
            <Users/>
        </PrivateRoute>,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/users',
        element: <PrivateRoute>
            <Users/>
        </PrivateRoute>
    },
    {
        path: '/users/edit/:id',
        element: <PrivateRoute>
            <EditUser />
        </PrivateRoute>
    }
])

export default {defaultRouter};