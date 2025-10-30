import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Your Firebase config (already filled)
const firebaseConfig = {
  apiKey: "AIzaSyDLciXEq9l4krR9uoUdJuswPFh3FK5TfUk",
  authDomain: "printyourgifts-2f1ed675.firebaseapp.com",
  projectId: "printyourgifts-2f1ed675",
  storageBucket: "printyourgifts-2f1ed675.appspot.com",
  messagingSenderId: "536748563474",
  appId: "1:536748563474:web:47665af0a0e27b60050ccb",
  measurementId: "G-8D2P41Z8L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// OAuth providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
