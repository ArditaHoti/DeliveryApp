// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkHIGzFsxBe33VmGIVx986FWglQ8VGEkc",
  authDomain: "food-6a670.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://food-6a670-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "food-6a670",
  storageBucket: "food-6a670.appspot.com",
  messagingSenderId: "789475744481",
  appId: "1:789475744481:web:1ef505a49732ad91a835a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export const filterDataRef = ref(database, "filterData");
export const filterData2Ref = ref(database, "filterData2");
export const restaurantsDataRef = ref(database, "restaurantsData");
export const productDataRef = ref(database, "productData");
export const menuDataRef = ref(database, "menuData");
export const specialDataRef = ref(database, "specialData");
export const menuRef = ref(database, "menu");
export const menuDetailedDataRef = ref(database, "menuDetailedData");
