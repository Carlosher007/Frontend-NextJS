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

export const getCard = async(user_id?: number) => {
    try {
        const response = await orderApi.get('card', {
            params: {
                user_id: user_id
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}