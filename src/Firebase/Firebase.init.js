// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrrs4Kp9_R23MEGaeCRvg78OaIjol1nL4",
  authDomain: "zap-shift-client-ff9a7.firebaseapp.com",
  projectId: "zap-shift-client-ff9a7",
  storageBucket: "zap-shift-client-ff9a7.firebasestorage.app",
  messagingSenderId: "838925271342",
  appId: "1:838925271342:web:e05e1701db1f64da71babf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
