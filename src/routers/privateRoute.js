import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useEffect} from "react";
import {checkAuth} from "../store/authSlice";

export const PrivateRoute = ({children}) => {
    const isAuth = useSelector((state)=> state.authReducer.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    if (!isAuth) {
        return <Navigate to={'/login'} />
    }

    return children;
}