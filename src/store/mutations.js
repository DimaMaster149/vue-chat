import Vue from 'vue'

export const setUser = (state, user) => {
  state.user = user;
}

export const addUser = (state, user) => {
  state.users.push(user)
}

export const deleteUser = (state, user) => {
  state.users = state.users.filter(username => username !== user)
}

export const clearUser = (state) => {
  state.user = {}
}

export const setConnections = (state, connections) => {
  state.connections = connections;
}

export const addMessage = (state, msg) => {
  state.messages.push(msg)
}

export const deleteMessage = (state, msg) => {
  state.messages = state.messages.filter(message => message.id !== msg.id)
}

export const updateUser = (state, user) => {
  state.user = user;
  let index = state.users.indexOf(u => u.email == user.email)
  Vue.set(state.users, index, user)
}

export const updateNameColor = (state, color) => {
  Vue.set(state.user, 'nameColor', color)
}

export const updateMessageColor = (state, color) => {
  Vue.set(state.user, 'messageColor', color)
}