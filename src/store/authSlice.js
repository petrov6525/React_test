import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isAuth: false
}

const authSlice = createSlice({
   name: 'authSlice',
    initialState,
    reducers: {
       setIsAuth: (state, action) => {
           state.isAuth = action.payload;
       },
        checkAuth: (state, action) => {
           const authData = localStorage.getItem("isAuth");
           state.isAuth = !!authData;
        },
        login: (state) => {
           localStorage.setItem("isAuth", "true");
           state.isAuth = true;
        },
        logout: (state) => {
           localStorage.removeItem("isAuth");
           state.isAuth = false;
        }
    }
});

export const {
    setIsAuth,
    checkAuth,
    login,
    logout
    } = authSlice.actions;

export default authSlice.reducer;
