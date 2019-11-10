import { REGISTER_REQUEST, AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from 'src/store/actions/auth'
import { USER_REQUEST } from 'src/store/actions/user'
import auth from 'src/api/auth'

const state = {
    token: localStorage.getItem('user-token'),
    status: '',
    hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, userData) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      auth.login(userData)
      .then(resp => {
        localStorage.setItem('user-token', resp.data.token);
        commit(AUTH_SUCCESS, resp);
        dispatch(USER_REQUEST);
        resolve(resp)
      })
      .catch(err => {
        commit(AUTH_ERROR, err);
        reject(err)
      })
    })
  },
  [REGISTER_REQUEST]: ({commit, dispatch}, userData) => {
    return new Promise((resolve, reject) => {
      commit(REGISTER_REQUEST);
      auth.register(userData)
      .then(resp => {
        localStorage.setItem('user-token', resp.data.token);
        commit(AUTH_SUCCESS, resp);
        dispatch(USER_REQUEST);
        resolve(resp)
      })
      .catch(err => {
        commit(AUTH_ERROR, err);
        reject(err)
      })
    })
  },
};

const mutations = {
  [REGISTER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.data.token;
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    localStorage.removeItem('user-token');
    state.token = ''
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
