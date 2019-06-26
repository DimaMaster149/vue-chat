import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    connections: [],
    user: {},
    users: []
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user)
      return new Promise((res, rej) => {
        res(user)
      }) 
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addUser(state, user) {
      state.users.push(user)
    },
    deleteUser(state, user) {
      state.users = state.users.filter(username => username !== user)
    },
    clearUser(state) {
      state.user = {}
    },
    setConnections(state, connections) {
      state.connections = connections;
    },
    addMessage(state, msg) {
      state.messages.push(msg)
    },
    deleteMessage(state, msg) {
      state.messages = state.messages.filter(message => message.id !== msg.id)
    }
  },
})