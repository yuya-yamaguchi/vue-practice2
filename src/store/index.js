import { createStore } from 'vuex'
import count from './modules/count'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state: {
    massage: ""
  },
  getters,
  mutations,
  actions,
  modules: {
    count
  }
})
