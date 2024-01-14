import * as React from 'react';
import {MainLayout} from "../../layout/mainLayout";
import {useEffect, useState} from "react";
import {UsersTable} from "./usersTable";
import axios from "../../routers/axios";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadError, setIsLoadError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/all");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
            setIsLoadError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <MainLayout>
            {isLoading ? <h1>Loading...</h1>
            : isLoadError ? <h1>Loading data error =((</h1>
            : <UsersTable users={users}/>}
        </MainLayout>
    )
}