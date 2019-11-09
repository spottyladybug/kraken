import Repository from 'src/api/repository';

export default {
    index(resource) {
        return Repository.get(`${resource}`);
    },
};
