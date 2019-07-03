import store from "@/store"

export const isAuthorized = (to, from, next) => {
  if (store.state.user && store.state.user.username) {
    store.commit('updateNameColor', window.localStorage.getItem('nameColor'));
    store.commit('updateMessageColor', window.localStorage.getItem('messageColor'));
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (user && user.username && user.active) {
      store.commit('setUser', user);
      store.commit('updateNameColor', window.localStorage.getItem('nameColor'));
      store.commit('updateMessageColor', window.localStorage.getItem('messageColor'));
      next()
    }
    else {
      next({
        name: "login"
      })
    }
  }
}
