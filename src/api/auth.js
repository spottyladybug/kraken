import { Repository } from 'src/api/repository';

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
        return Repository.post('/api/profiles/', { data } );
    },
};
