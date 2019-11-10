import axios from 'axios';

export const Repository = axios.create({
    baseURL: 'http://188.93.211.71:8000', // ввести url сервера
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJ1c2VybmFtZSI6InF3ZXJ0QHRlc3QuY29tIiwiZXhwIjoxNTczMzYyMjc1LCJlbWFpbCI6InF3ZXJ0QHRlc3QuY29tIiwib3JpZ19pYXQiOjE1NzMzNTg2NzV9._nfi3jL4QRoy_c6K9AbRNroHzR0BkNlwjfzkVJFCOBA`,
    }
})
