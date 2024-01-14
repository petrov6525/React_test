import {useEffect, useState} from "react";
import {MainLayout} from "../../layout/mainLayout";
import {useParams} from "react-router-dom";
import * as React from "react";
import {EditUserForm} from "./editUserForm";
import axios from "../../routers/axios";
import styled from "styled-components";


export const EditUser = () => {
    const params = useParams();
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadError, setIsLoadError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/all/${params.id}`);
            setUser(response.data);
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
                    : <FormDiv>
                        <EditUserForm user={user}/>
                    </FormDiv>
            }
        </MainLayout>
    )
}

const FormDiv = styled.div`
  padding: 15px;
  border: 1px solid gray;
  border-radius: 20px;
  width: 450px;
`;