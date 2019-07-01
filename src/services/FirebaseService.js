// Singleton class
import firebase from 'firebase'
import { firebaseConfig } from '../../env'

export default class Firebase {

  static _instance = new Firebase();

  constructor() {
    // firebase db config
    const app = firebase.initializeApp(firebaseConfig);

    //Создается в опр месте когда нужно подключение к бд

    const db = app.database();
    const dbRef = db.ref('users');

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log(user);
    //   } else {
    //     console.log('no user');
    //   }
    // });

    if (Firebase._instance) {
      throw new Error('Error: Instantiation failed: Use FirebaseCFirebaselass.getInstance() instead of new.');
    }
    Firebase._instance = app;
    Firebase.dbRef = dbRef;
  }

  static getInstance() {
    return Firebase._instance;
  }
  
  static getDbRef() {
    return Firebase.dbRef;
  }
}