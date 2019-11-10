import { Repository } from 'src/api/repository';

export default {
    profiles() { // получение списка пользователей
        return Repository.get('/api/profiles');
    },
    roles() { // получение прав пользователей
        return Repository.get('/api/roles/permissions');
    },
    access() { // какие права у каких пользователей в системе
        return Repository.get('/api/roles/access');
    },
};
