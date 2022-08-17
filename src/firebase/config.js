import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyACVXrdc8DLdyfTpiVTvsRbp7DQL-cP-cw",
  authDomain: "collab-party-8049c.firebaseapp.com",
  projectId: "collab-party-8049c",
  storageBucket: "collab-party-8049c.appspot.com",
  messagingSenderId: "837127837136",
  appId: "1:837127837136:web:f3cf25e469a573c03755d5",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
