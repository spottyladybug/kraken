import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from 'src/store/actions/user'
import request from 'src/api/request'
import Vue from 'vue'
import { AUTH_LOGOUT } from 'src/store/actions/auth'

const state = {
    status: '',
    email: undefined,
    password: undefined,
    first_name: undefined,
    last_name: undefined,
    phone: undefined,
};

const getters = {
  email: state => state.email,
  isProfileLoaded: state => !!state.email,
};

const actions = {
  [USER_REQUEST]: ({commit, dispatch}) => {
    commit(USER_REQUEST);
    return request.profile().then(resp => {
        commit(USER_SUCCESS, resp)
      }).catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },
};

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success';
    Vue.set(state, 'email', resp.data[0].fields)
    Vue.set(state, 'password', resp.data[0].fields)
    Vue.set(state, 'first_name', resp.data[0].fields)
    Vue.set(state, 'last_name', resp.data[0].fields)
    Vue.set(state, 'phone', resp.data[0].fields)
  },
  [USER_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.email = undefined,
    state.password = undefined,
    state.first_name = undefined,
    state.last_name = undefined,
    state.phone = undefined
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
