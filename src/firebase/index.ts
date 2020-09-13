import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmIUBscuwh-wr8v8KmaVM1AENehT5UM6k",
  authDomain: "whatsapp-clone-mern-80df8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-mern-80df8.firebaseio.com",
  projectId: "whatsapp-clone-mern-80df8",
  storageBucket: "whatsapp-clone-mern-80df8.appspot.com",
  messagingSenderId: "44327547724",
  appId: "1:44327547724:web:054a17ce1dfbcf705cd5e9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
