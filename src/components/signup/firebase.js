import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDs7t-qul-h3e68vsohAlR7U_F4ScjBIE8",
  authDomain: "hloy-af372.firebaseapp.com",
  projectId: "hloy-af372",
  storageBucket: "hloy-af372.appspot.com",
  messagingSenderId: "672902489803",
  appId: "1:672902489803:web:16943950db5c7a66f8dd4e",
  measurementId: "G-ZN23CK1CXN"
  };

const app = initializeApp(firebaseConfig);

// FirebaseAuth.instance.setSettings.appVerificationDisabledForTesting: true,
  

export const auth = getAuth(app);