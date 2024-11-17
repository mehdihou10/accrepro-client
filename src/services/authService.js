import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

export const register = async (userData) => {
    return await axios.post(`${apiUrl}/users/register`, userData);
};

export const login = async (credentials) => {
    const response = await axios.post(`${apiUrl}/users/login`, credentials);
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
