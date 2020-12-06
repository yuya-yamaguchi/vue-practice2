const state = {
  token: ''
};

const getters = {
  token: state => state.token
}

const mutations = {
  login (state, payload) {
    state.token = payload;
  },
  logout (state) {
    state.token = null;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  mutations
};