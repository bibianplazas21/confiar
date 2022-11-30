// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiD0xoWSDurEKXRHDLkx7peL2B0RvYU80",
  authDomain: "confiar-host.firebaseapp.com",
  projectId: "confiar-host",
  storageBucket: "confiar-host.appspot.com",
  messagingSenderId: "716333869246",
  appId: "1:716333869246:web:bde3a453eefa08420b56ef",
  measurementId: "G-78TLQY0277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);