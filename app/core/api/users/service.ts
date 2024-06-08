import axios from 'axios';
import { headers } from 'next/headers';

const BASE_URL = process.env.NEXT_PUBLIC_USERS_SERVICE_URL;

const userApi = axios.create({
  baseURL: BASE_URL
});

export const getUsers = async (user_id: number) => {
    try {
      const response = await userApi.get(`/user/do/${user_id}`);
      return response;
    } catch (error) {
      return null;
    }
};

export const createUser = async (email:string, first_name: string, last_name: string, username:string,
    password:string, re_password:string
) => {
    try {
        const response = await userApi.post(`/auth/users/`, {
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
            re_password: re_password
        });
        return response;
    } catch (error) {
        return null;
    }
}

export const loginUser = async (username:string, password:string) => {
    try {
        const response = await userApi.post(`/auth/jwt/create/`, {
            username: username,
            password: password
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const verifyToken = async (token:string) => {
    try {
        const response = await userApi.post(`/auth/jwt/verify/`, {
            token: token
        });
        return response;
    } catch (error) {
        return null;
    }
}

export const refreshToken = async (refresh:string) => {
    try {
        const response = await userApi.post(`/auth/jwt/refresh/`, {
            refresh: refresh
        });
        return response;
    } catch (error) {
        return null;
    }
}

export const updateUser = async (data: any, token:string) => {
    try {
        const response = await userApi.patch(`/auth/users/me/`,data,{
            headers:{
                'Authorization': `JWT ${token}`
            }}
        );
        return response;
    } catch (error: any) {
        const response = error.response;
        return response;
    }
}

export const infoUser = async (token:string) => {
    try {
        const response = await userApi.get(`/auth/users/me/`,{
            headers:{
                'Authorization': `JWT ${token}`
            }}
        );
        return response;
    } catch (error) {
        return null;
    }
}

export const activateUser = async (uid:string, token:string) => {
    try {
        const response = await userApi.post(`/auth/users/activation/`,{
            uid: uid,
            token: token
        });
        return response;
    } catch (error) {
        return null;
    }
}