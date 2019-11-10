import { Repository } from 'src/api/repository';

export default {
    login(data) {
        return Repository.post('/api/api-token-auth/', data);
    },

    logout() {
        return Repository.post('/logout');
    },

    register(data) {
        return Repository.post('/api/profiles/', data);
    },
};
