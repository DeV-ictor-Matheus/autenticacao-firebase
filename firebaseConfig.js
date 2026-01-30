import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt14HvdyKS09fZveI_OAj25MsM_tCc7nc",
  authDomain: "autenticacao-firebase-e6510.firebaseapp.com",
  projectId: "autenticacao-firebase-e6510",
  storageBucket: "autenticacao-firebase-e6510.firebasestorage.app",
  messagingSenderId: "929693218687",
  appId: "1:929693218687:web:3aef20e27a03d459e68c4a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
