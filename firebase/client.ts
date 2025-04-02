
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyhNSPuVf7rNVTtRuYvNjlPQPLX6dro_s",
  authDomain: "milespeak-b9af1.firebaseapp.com",
  projectId: "milespeak-b9af1",
  storageBucket: "milespeak-b9af1.firebasestorage.app",
  messagingSenderId: "696866843976",
  appId: "1:696866843976:web:17076086e4413f3b12177d",
  measurementId: "G-R4MC63YDJ3"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
