// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBHDkTt5S5ztaYdTB3mSFRBJeo9DRqc7gs",
  authDomain: "ghtf-4f40e.firebaseapp.com",
  projectId: "ghtf-4f40e",
  storageBucket: "ghtf-4f40e.appspot.com",
  messagingSenderId: "452512166844",
  appId: "1:452512166844:web:254470a23b59f5f046f1b9",
  measurementId: "G-19YBVW5540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);