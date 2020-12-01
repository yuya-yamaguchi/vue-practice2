import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    massage: ""
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message
  },
  mutations: { // commit
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  actions: { // dispatch
    increment(context, number) {
      context.commit("increment", number);
    },
    decrement(context, number) {
      context.commit("decrement", number);
    },
    updateMessage(context, newMessage) {
      context.commit("updateMessage", newMessage)
    }
  },
  modules: {
  }
})
