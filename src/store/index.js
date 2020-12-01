import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    }
  },
  actions: {
  },
  modules: {
  }
})
