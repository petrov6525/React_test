import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";



export const store = configureStore({
    reducer: {
        authReducer: authSlice
    }
})

export default {store};