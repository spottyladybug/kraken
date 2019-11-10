import axios from 'axios';

export const Repository = axios.create({
    baseURL: 'http://188.93.211.71:8000', // ввести url сервера
    headers: {
        'X-Auth-Token': '', //TODO: было бы неплохо
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})
