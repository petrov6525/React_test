import * as React from 'react';
import {Field, Formik, Form, ErrorMessage} from "formik";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/authSlice";
import {Navigate} from "react-router-dom";

export const LoginForm = ()=> {
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=> state.authReducer.isAuth);
    const handleSubmit = (values, {setSubmitting}) => {
        if (values.login === "admin" && values.password === "qwerty!") {
            dispatch(login());
        }
    }

    const validate = (values) => {
        const errors = {};
        const passwordPattern = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()]).*$/;
        const loginPattern = /^([a-zA-Z0-9])+$/;

        if (!loginPattern.test(values.login)) {
            errors.login = "Логін має містити лише латинські літери та цифри"
        } else if (values.login.trim() === "" || values.login.trim().length < 3) {
            errors.login = "Логін має бути мінімум 3 символи"
        }

        if (!passwordPattern.test(values.password)) {
            errors.password = "Пароль має містити лише літери та цирфи і обов'язково хоча б один символ !@#$%^&*()"
        } else if (values.password.trim() === "" || values.password.trim().length < 6) {
            errors.password = "Пароль має бути мінімум 6 символів"
        }

        return errors;
    }

    if (isAuth) {
        return <Navigate to={'/users'} />
    }

    return(
        <Formik initialValues={
            {
                login: '',
                password: ''
            }}
                validate={(values)=> validate(values)}
                onSubmit={handleSubmit}>
            <Form className={"login-form"}>
                <div>
                    <Field className={"login-form__input"}
                           type="text"
                           name="login"
                           placeholder="Login"
                           onInput={(errors)=>errors.login = null}
                           required
                    />
                    <ErrorMessage className={"login-form__error"} name="login" component="div" />
                </div>

                <div>
                    <Field className={"login-form__input"}
                           type="password"
                           name="password"
                           placeholder="Password"
                           required
                    />
                    <ErrorMessage className={"login-form__error"} name="password" component="div" />
                </div>

                <div>
                    <Submit type="submit">Log In</Submit>
                </div>
            </Form>

        </Formik>
    )
}

const Submit = styled.button`
    width: 100%;
  padding: 5px;
  border-radius: 15px;
`;

