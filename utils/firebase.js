import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"; // Importa signInWithEmailAndPassword
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs9JNVy5GNwFhY4P9qZUFie378ceeNOgY",
  authDomain: "registro-presenze-e5066.firebaseapp.com",
  projectId: "registro-presenze-e5066",
  storageBucket: "registro-presenze-e5066.firebasestorage.app",
  messagingSenderId: "62480357103",
  appId: "1:62480357103:web:746b4eca2853a3f3372d1a"
};


// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Esporta le funzioni di autenticazione
export { auth, db, signInWithEmailAndPassword };