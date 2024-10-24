import axios from "axios";

let bearerToken = "";
const axiosWithConfig = axios.create({
    baseURL: 'https://buitenzorg-server.vercel.app/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to set bearer token globally
export const setAxiosConfig = (token: string) => {
    bearerToken = token;
    axiosWithConfig.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
};

export default axiosWithConfig;
