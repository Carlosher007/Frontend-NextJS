import axios from 'axios';

const orderApi = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

export const fetchData = async () => {
    try {
        const response = await orderApi.get('order');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};