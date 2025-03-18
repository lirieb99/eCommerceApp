import axios from 'axios'; 

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const registerUser = async (userData) => {
    try {
        return await axios.post(`${API_URL}/auth/register`, userData, {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};

export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchProducts = async () => {
    return axios.get(`${API_URL}/products`);
};
