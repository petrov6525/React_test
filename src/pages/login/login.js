import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {LoginForm} from "./loginForm";


export  const Login = () => {
    const dispatch = useDispatch();

    return (
        <MainDiv>
            <FormDiv>
                <LoginForm />
            </FormDiv>
        </MainDiv>
    )
}

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.div`
  padding: 15px;
  border: 1px solid gray;
  border-radius: 20px;
  width: 450px;
`;