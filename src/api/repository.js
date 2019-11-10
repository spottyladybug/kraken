import axios from 'axios';

export const Repository = axios.create({
    baseURL: 'http://188.93.211.71:8000', // ввести url сервера
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': localStorage.getItem('user-token') ? `JWT ${localStorage.getItem('user-token')}` : '',
    }
})
