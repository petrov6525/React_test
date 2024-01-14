import * as React from 'react';
import styled from "styled-components";
import {Navigate} from "react-router-dom";
import {Login} from "../pages/login/login";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../store/authSlice";

export const MainLayout = ({children}) => {
const dispatch = useDispatch();
    return (
        <>
            <NavBar>
                <LogoutButton onClick={()=> dispatch(setIsAuth(false))}>Log Out</LogoutButton>
            </NavBar>
            <MainDiv>
                {children}
            </MainDiv>
        </>
    )
}

const LogoutButton = styled.button`
    padding: 10px;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const NavBar = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-right: 50px;
`;