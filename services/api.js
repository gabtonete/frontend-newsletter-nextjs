import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    //baseURL: 'http://localhost:3001/api',
    timeout: 30000
});

export const apiRequest = (endpoint, method, body) => {
    return instance.request({
        url: endpoint,
        method: method,
        data: body
    });
}
