const state = {
  count: 0
};

const getters = {
  count: state => state.count,
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3
}

const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  }
}

const actions = {
  increment(context, number) {
    context.commit("increment", number);
  },
  decrement(context, number) {
    context.commit("decrement", number);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}