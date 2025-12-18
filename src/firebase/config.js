// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQh9SdtiB_u_FLLMsaLnP6CsnrLNgimU",
  authDomain: "trvstore-b15d7.firebaseapp.com",
  projectId: "trvstore-b15d7",
  storageBucket: "trvstore-b15d7.firebasestorage.app",
  messagingSenderId: "737765804872",
  appId: "1:737765804872:web:19134a93ada3b7a360c17d",
  measurementId: "G-XKHB5P6KS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias de Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
