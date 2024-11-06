export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyB1LdeYLfnk93OBDDU8N_JjdfhGOgl9dog",
  authDomain: "iogalab.firebaseapp.com",
  projectId: "iogalab",
  storageBucket: "iogalab.firebasestorage.app",
  messagingSenderId: "831905939205",
  appId: "1:831905939205:web:b398ff714cd248d0e9416c",
  measurementId: "G-KQ504P5NFK"
  }
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1LdeYLfnk93OBDDU8N_JjdfhGOgl9dog",
  authDomain: "iogalab.firebaseapp.com",
  projectId: "iogalab",
  storageBucket: "iogalab.firebasestorage.app",
  messagingSenderId: "831905939205",
  appId: "1:831905939205:web:b398ff714cd248d0e9416c",
  measurementId: "G-KQ504P5NFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
