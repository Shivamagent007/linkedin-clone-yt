import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbMEgyaPiYTBj_JxiPnD96YRxd4n0xRUk",
  authDomain: "linkedin-clone-yt-32da1.firebaseapp.com",
  projectId: "linkedin-clone-yt-32da1",
  storageBucket: "linkedin-clone-yt-32da1.appspot.com",
  messagingSenderId: "923512783396",
  appId: "1:923512783396:web:1107e1e828ee97f14f4eb1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db }
