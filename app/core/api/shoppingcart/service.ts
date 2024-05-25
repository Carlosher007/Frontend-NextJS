import axios from 'axios';
import { Category, Image } from "@/app/core/lib/definitions";

const BASE_URL = process.env.NEXT_PUBLIC_SHOPPINGCART_SERVICE_URL;

const orderApi = axios.create({
  baseURL: BASE_URL
})

export const getCarts = async () => {
  try {
    const response = await orderApi.get('');
    return response.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
};

export const getCart = async (user_id: number) => {
  try {
    console.log(user_id)
    const response = await orderApi.get(`/getCartByUserId/${user_id}`);
    return response.data;
  } catch (error: any) {
    console.log(error.response.data.message)
    return null;
  }
}

export const getImageFromCart = async (user_id: number, image_id: number) => {
  try {
    const response = await orderApi.get(`/getCartByUserId/${user_id}/${image_id}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}

export const createCart = async (user_id: number) => {
  try {
    const response = await orderApi.post(`/createNewCartByUser/${user_id}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}

export const assignImageFromCart = async (user_id: number, image_id: number) => {
  try {
    const response = await orderApi.put(`/assignImageToCartByUserId/${user_id}/${image_id}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}

export const deleteCart = async (user_id: number) => {
  try {
    const response = await orderApi.delete(`/deleteCartByUserId/${user_id}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}

export const deleteAllImagesFromCart = async (user_id: number) => {
  try {
    const response = await orderApi.delete(`/deleteAllImagesFromCart/${user_id}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
}

export const deleteImageFromCart = async (user_id: number, image_id: number) => {
  try {
    const response = await orderApi.delete(`/deleteImageFromCart/${user_id}/${image_id}`);
    return response.data;
  } catch (error:any) {
    console.log(error.response.data.message)
    return null;
  }
}