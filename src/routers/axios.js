import axios from "axios";

const baseUrl = "https://65a41a99a54d8e805ed47381.mockapi.io/api/users";
export const axiosInstance = axios.create({
    baseURL: baseUrl
});

export default axiosInstance;