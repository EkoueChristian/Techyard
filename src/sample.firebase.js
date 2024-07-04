import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_ADMIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_ACCOUNT",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
//   Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = firebase.firestore(app);
export const storage = firebase.storage(app);
export default firebase;
