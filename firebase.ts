// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //databaseURL: "https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com",

  apiKey: "AIzaSyDU6jBBu-cnde84MPmCTHCUebO81v1kQlQ",
  authDomain: "netflix-clone-yt-57b16.firebaseapp.com",
  projectId: "netflix-clone-yt-57b16",
  storageBucket: "netflix-clone-yt-57b16.appspot.com",
  messagingSenderId: "1089218063556",
  appId: "1:1089218063556:web:84eeb2f73aebce0b156d91",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
console.log(getApps().length)
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
