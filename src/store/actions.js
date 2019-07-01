import FirebaseService from "../services/FirebaseService";

const dbRef = FirebaseService.getDbRef();

export const addUser = ({ commit }, payload) => {       
  const { username, email, nameColor, messageColor } = payload.user;
  const user = {
    username: username,
    emaii: email,
    nameColor: nameColor,
    messageColor: messageColor
  }; 

  dbRef.child(username).set({ ...user });
  commit("addUser", user);
};

export const deleteUser = ({ commit }, payload) => {
  const user = payload.user;
  dbRef.child(user.username).remove();
  commit("deleteUser", user);
};

export const setUser = ({ commit }, user) => {
  commit("setUser", user);
  return new Promise(res => {
    res(user);
  });
};
