import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHDkTt5S5ztaYdTB3mSFRBJeo9DRqc7gs",
  authDomain: "ghtf-4f40e.firebaseapp.com",
  projectId: "ghtf-4f40e",
  storageBucket: "ghtf-4f40e.appspot.com",
  messagingSenderId: "452512166844",
  appId: "1:452512166844:web:09b388dc2677532046f1b9",
  measurementId: "G-TSER8SMZXY",
};

const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
