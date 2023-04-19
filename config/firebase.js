// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkHIGzFsxBe33VmGIVx986FWglQ8VGEkc",
  authDomain: "food-6a670.firebaseapp.com",
  projectId: "food-6a670",
  storageBucket: "food-6a670.appspot.com",
  messagingSenderId: "789475744481",
  appId: "1:789475744481:web:1ef505a49732ad91a835a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);