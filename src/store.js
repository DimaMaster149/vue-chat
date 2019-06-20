import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: ''
  },
  actions: {
    fetchUser({
      commit
    }) {
      axios.get("https://randomuser.me/api/").then(res => {
        commit("setName", res.data.results.user);
      })
    }
  },
  mutations: {
    setUserData(state, user) {
      state.firstName = user.firstName;
      state.lastName = user.lastName
    }
  },
  getters: {
    fullName: (state) => {
      return `${state.firstName} ${state.lastName}`;
    }
  }
})