import store from "@/store"

export const isAuthorized = (to, from, next) => {
  if(store.state.user && store.state.user.username) {
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (user && user.username && user.active) {
      store.commit('setUser', user);
      next()
    }
    else {
      next({
        name: "login"
      })
    }
  }
}
