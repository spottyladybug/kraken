import Vue from 'vue'
import Vuex from 'vuex'
import user from 'src/store/modules/user'
import auth from 'src/store/modules/auth'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        user,
        auth,
    },
    strict: debug,
})
