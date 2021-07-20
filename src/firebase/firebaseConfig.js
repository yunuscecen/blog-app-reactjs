import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "XXXXXXXXXX",
  authDomain: "XXXXXXXXXX",
  databaseURL: "XXXXXXXXXXX",
  projectId: "XXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXXX",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
