import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


 

const firebaseConfig = {
  apiKey: "AIzaSyDAiqS1_2-9xdUmyuajy163M1qwt5IWTBk",
  authDomain: "saiadmin.firebaseapp.com",
  projectId: "saiadmin",
  storageBucket: "saiadmin.appspot.com",
  messagingSenderId: "38334210215",
  appId: "1:38334210215:web:61b61149a018e47e2c3b82",
  measurementId: "G-30CCPTK42B"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
