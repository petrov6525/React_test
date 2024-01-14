import {useDispatch, useSelector} from "react-redux";
import {setIsAuth} from "../../store/authSlice";
import {Link, Navigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as React from "react";
import styled from "styled-components";
import {useState} from "react";
import {Modal} from "./modal";

export const EditUserForm = ({user}) => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const handleSubmit = (values, {setSubmitting}) => {
        setSuccess(true);
        // setSubmitting(true);
    }

    const validate = (values) => {
        const errors = {};
        const passwordPattern = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()]).*$/;

        if (values.name.trim() === "" || values.name.trim().length < 3) {
            errors.name = "Логін має бути мінімум 3 символи"
        }

        if (!passwordPattern.test(values.password)) {
            errors.password = "Пароль має містити лише літери та цирфи і обов'язково хоча б один символ !@#$%^&*()"
        } else if (values.password.trim() === "" || values.password.trim().length < 6) {
            errors.password = "Пароль має бути мінімум 6 символів"
        }

        return errors;
    }

    return(
        <>
            <Modal visible={success}/>
            <Formik initialValues={
                {
                    id: user.id,
                    name: user.name,
                    password: user.password
                }}
                    validate={(values)=> validate(values)}
                    onSubmit={handleSubmit}>
                <Form className={"login-form"}>
                    <div>
                        <Field className={"login-form__input"}
                               type="text"
                               name="name"
                               placeholder="Name"
                               onInput={(errors)=>errors.name = null}
                               required
                               disabled={success}
                        />
                        <ErrorMessage className={"login-form__error"} name="name" component="div" />
                    </div>

                    <div>
                        <Field className={"login-form__input"}
                               type="password"
                               name="password"
                               placeholder="Password"
                               required
                               disabled={success}
                        />
                        <ErrorMessage className={"login-form__error"} name="password" component="div" />
                    </div>

                    <div>
                        <Submit type="submit">Save</Submit>
                        <Link className={"edit-user__cancel-link"} to={'/users'}>Cancel</Link>
                    </div>
                </Form>

            </Formik>
        </>
    )
}

const Submit = styled.button`
    width: 100%;
  padding: 5px;
  border-radius: 15px;
`;