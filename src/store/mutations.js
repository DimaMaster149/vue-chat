import Vue from "vue";

export const setUser = (state, user) => {
  window.localStorage.setItem("user", JSON.stringify({...user, active: true}));
  state.user = {...user, active: true};
};

export const deleteUser = (state, user) => {
  state.users = state.users.filter(username => username !== user.username);
};

export const clearUser = state => {
  window.localStorage.removeItem('user');
  state.user = {};
};

export const setConnections = (state, connections) => {
  state.connections = connections;
};

export const addMessage = (state, msg) => {
  state.messages.push(msg);
};

export const deleteMessage = (state, msg) => {
  state.messages = state.messages.filter(message => message.id !== msg.id);
};

export const updateUser = (state, payload) => {
  Vue.set(state.user, "active", payload.active);
};

export const updateNameColor = (state, color) => {
  window.localStorage.setItem("nameColor", color);
  Vue.set(state.user, "nameColor", color);
};

export const updateMessageColor = (state, color) => {
  window.localStorage.setItem("messageColor", color);
  Vue.set(state.user, "messageColor", color);
};
