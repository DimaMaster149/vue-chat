import FirebaseService from "../services/FirebaseService";
import passwordHash from "password-hash"
import firebase from "firebase"
import router from "../router"

const dbRef = FirebaseService.getDbRef();

export const signUp = ({ commit }, payload) => {
  const { username, email, nameColor, messageColor, password } = payload;
  let hashPassword = passwordHash.generate(password);
  const user = {
    username: username,
    email: email,
    password: hashPassword,
    active: true
  };

  dbRef.child(username).set({ ...user });
  commit("setUser", {
    username: username,
    email: email,
    nameColor: nameColor,
    messageColor: messageColor
  });
};

export const logIn = ({ commit }, payload) => {
  firebase.database().ref('/users/' + payload.username).once('value').then(function (snapshot) {
    let user = snapshot.val() || null;
    if (user && passwordHash.verify(payload.password, user.password)) {
      commit("setUser", {
        username: user.username,
        email: user.email,
        nameColor: '#000',
        messageColor: '#000',
        active: true
      });
      dbRef.child(payload.username).update({ active: true }).then(() => {
        router.push({name: 'chat'})
      });
    } else {
      throw new Error('You aren`t registered. Check your credentials or registrate')
    }
  }).catch(err => alert(err))
};

export const logOut = ({ commit }, payload) => {
  dbRef.child(payload.username).update({ active: false });
  commit("updateUser", { active: false });
  router.push({ name: 'login' })
  commit('clearUser');
};

export const deleteUser = ({ commit }, payload) => {
  const user = payload.user;
  dbRef.child(user.username).remove();
  commit("deleteUser", user);
};
