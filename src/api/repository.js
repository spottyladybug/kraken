import axios from 'axios';

export default axios.create({
    baseURL: 'http://satellite.test', // ввести url сервера
    timeout: 5000,
    headers: {
        'X-Auth-Token': '', //TODO: было бы неплохо
        'Content-Type': 'application/json'
    }
})
