export const setUser = ({
  commit
}, user) => {
  commit('setUser', user)
  return new Promise((res) => {
    res(user)
  })
}