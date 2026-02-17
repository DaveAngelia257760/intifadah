// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO8UCPgtTYa1xAsAMtGCQjXLvF3aeYi-I",
  authDomain: "intifadaz.firebaseapp.com",
  projectId: "intifadaz",
  storageBucket: "intifadaz.firebasestorage.app",
  messagingSenderId: "348201605333",
  appId: "1:348201605333:web:875dca8f1f916d54532a5c",
  measurementId: "G-3E6XL2GRTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);