import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import count from './modules/count'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state: {
    massage: '',
    token: ''
  },
  getters,
  mutations,
  actions,
  modules: {
    count
  },
  // strict: true,
  plugins: [createPersistedState({
    key: 'PracticeApp',
    paths: ['token'],
    window:sessionStorage
  })]
})
