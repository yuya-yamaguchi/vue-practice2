import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import count from './modules/count'
import auth from './modules/auth'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state: {
    massage: ''
  },
  getters,
  mutations,
  actions,
  modules: {
    count,
    auth
  },
  strict: true,
  plugins: [createPersistedState({
    key: 'PracticeApp',
    paths: ['auth.token'],
    storage: window.sessionStorage
  })]
})
