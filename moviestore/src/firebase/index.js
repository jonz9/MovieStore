import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUyoSzp_T4E9Mh-qFQpz41OJP_RLYwKX4",
  authDomain: "movieretailsite.firebaseapp.com",
  projectId: "movieretailsite",
  storageBucket: "movieretailsite.appspot.com",
  messagingSenderId: "630063290690",
  appId: "1:630063290690:web:c4c5991980e29e117250db"
};

const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);