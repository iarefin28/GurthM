// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBampWgLqfvaWoA4n0PERtD1EAshnnHX-Q",
  authDomain: "gurthm-ce41a.firebaseapp.com",
  projectId: "gurthm-ce41a",
  storageBucket: "gurthm-ce   41a.appspot.com",
  messagingSenderId: "433045204589",
  appId: "1:433045204589:web:91443a905d5fd058ff1964",
  measurementId: "G-0LLCW70VFF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
