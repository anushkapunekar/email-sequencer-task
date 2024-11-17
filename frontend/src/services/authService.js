import axios from "axios";

const BASE_URL = !import.meta.env.PROD ? "http://localhost:3000/api/auth" : "/api/auth";


// for new user registration
export const registerUser = async (userData) => {
    try {
        console.log("sending registration data:", userData);
        const { data } = await axios.post("http://localhost:3000/api/auth/register", userData);
        return data;
    } catch (error) {
        console.error("Registration failed", error.response?.data);
        throw error.response?.data?.msg  || "Registration failed";
    }
}


// for user login
export const loginUser = async (userData) => {
    try {
        const { data } = await axios.post("http://localhost:3000/api/auth/login", userData);
        return data;
    } catch (error) {
        throw error.response.data.msg;
    }
}