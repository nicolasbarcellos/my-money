
import { initializeApp, getApps, getApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbevemiY04fxP400lxGyDVGMyQ1jguBNI",
  authDomain: "mymoney-f3973.firebaseapp.com",
  projectId: "mymoney-f3973",
  storageBucket: "mymoney-f3973.appspot.com",
  messagingSenderId: "418922877446",
  appId: "1:418922877446:web:b1d8bcb09df3bbf2886987",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
