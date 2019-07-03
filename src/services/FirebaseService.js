// Singleton class
import firebase from 'firebase'
import { firebaseConfig } from '../../env'

export default class Firebase {

  static _instance = new Firebase();

  constructor() {
    // firebase db config

    const app = firebase.initializeApp(firebaseConfig);
    const db = app.database();
    const dbRef = db.ref('users');

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