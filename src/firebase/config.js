// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Reemplaza esto con el objeto de configuración de tu proyecto de Firebase.
// Lo encuentras en: Configuración del proyecto -> General -> Tus apps -> Configuración del SDK.
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias de Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
