import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJ8NM3UFsVaZcssTazjDvL2x3TVEZQlw0",
  authDomain: "typing-app-5a34a.firebaseapp.com",
  projectId: "typing-app-5a34a",
  storageBucket: "typing-app-5a34a.appspot.com",
  messagingSenderId: "934248765670",
  appId: "1:934248765670:web:34f8b9642fd763e2904327",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };