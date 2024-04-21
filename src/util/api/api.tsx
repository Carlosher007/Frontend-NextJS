import axios from 'axios';

const orderApi = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

export const getAll = async () => {
    try {
        const response = await orderApi.get('order');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};