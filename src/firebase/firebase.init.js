// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfKFciHl_qZ71167IHeUUaegm7W5iT4VE",
  authDomain: "krishilink-c5b63.firebaseapp.com",
  projectId: "krishilink-c5b63",
  storageBucket: "krishilink-c5b63.firebasestorage.app",
  messagingSenderId: "519633015390",
  appId: "1:519633015390:web:bc0172088f52016e041acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);