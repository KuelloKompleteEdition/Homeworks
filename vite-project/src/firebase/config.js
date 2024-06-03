// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7R0Sjypb1ztT4xjrZVAjrAqGjy7tWOs4",
  authDomain: "ace-ellipse-397319.firebaseapp.com",
  projectId: "ace-ellipse-397319",
  storageBucket: "ace-ellipse-397319.appspot.com",
  messagingSenderId: "279781129907",
  appId: "1:279781129907:web:1add8d92f9c9266dbfbac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };