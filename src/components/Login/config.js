// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoumrD9lTJUXoRblN4wPJwIS53tBH4zWU",
  authDomain: "covid-18353.firebaseapp.com",
  projectId: "covid-18353",
  storageBucket: "covid-18353.appspot.com",
  messagingSenderId: "104272940000",
  appId: "1:104272940000:web:97d4ccf88be11d9f39f985",
  measurementId: "G-S3MGV9BKQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
export default app;
