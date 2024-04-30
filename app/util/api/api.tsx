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

export const addCard = async(user_id: number, card_number: string, expiration_date: string, cvc_code: string, owner_name: string) => {
    try {
        const response = await orderApi.post('card', {
            user_id: user_id,
            card_number: card_number,
            expiration_date: expiration_date,
            cvc_code: cvc_code,
            owner_name: owner_name
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export const editCard = async(card_id: string, user_id: string, card_number: string, expiration_date: string, cvc_code: string, owner_name: string
  ) => {
    try {
      const body = {
        card_number,
        user_id,
        expiration_date,
        cvc_code,
        owner_name
      };

      console.log(body)
  
      const response = await orderApi.put(`card/${card_id}`, body);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

export const deleteCard = async(card_id: string) => {
    try {
        console.log(card_id);
        const response = await orderApi.delete(`card/${card_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}