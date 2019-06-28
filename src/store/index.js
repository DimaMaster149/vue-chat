import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

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
  actions,
  mutations,
  getters
})