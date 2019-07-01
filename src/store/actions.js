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
  dbRef.push({...user});
  commit("addUser", user);
};

export const deleteUser = ({ commit }, payload) => {
  const user = payload.user;
  console.log(user, 'user delete user action')
  console.log(user.email, 'email')
  // dbRef.orderByChild('email').equalTo(user.email).on("value", function (snapshot) {
  //   console.log(snapshot, 'snapshot')
  //   snapshot.forEach(function (data) {
  //     console.log(data.key, 'data')
  //     // dbRef.child(data.key).remove()
  //   });
  // });
};

export const setUser = ({ commit }, user) => {
  commit("setUser", user);
  return new Promise(res => {
    res(user);
  });
};
