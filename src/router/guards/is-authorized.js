import store from "@/store"

export const isAuthorized = (to, from, next) => {
  if(store.state.user && store.state.user.username) {
    next()
  } else {
    next({
      name: "login"
    })
  }
}
