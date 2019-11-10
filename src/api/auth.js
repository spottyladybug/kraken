import { Repository } from 'src/api/repository';
import axios from 'axios';

export default {
    user() {
        return Repository.get('/api/user');
    },

    login(data) {
        return Repository.post('/login', data);
    },

    logout() {
        return Repository.post('/logout');
    },

    register(data) {
        return axios.post('/api/profiles/', { data } );
    },
};
