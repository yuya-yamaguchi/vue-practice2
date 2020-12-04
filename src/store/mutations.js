export default {
  updateMessage(state, newMessage) {
    state.message = newMessage
  },
  login (state, payload) {
    state.token = payload;
  },
  logout (state) {
    state.token = null;
  }
};