import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVDL6xLy-jNkNxeotolbKt49yDMhq-t1s",
  authDomain: "testi-c59d8.firebaseapp.com",
  projectId: "testi-c59d8",
  storageBucket: "testi-c59d8.appspot.com",
  messagingSenderId: "914471626708",
  appId: "1:914471626708:web:5f2e260d6ae21a3c3b5841",
  measurementId: "G-MSEGFTRDBG"
  };

const app = initializeApp(firebaseConfig);

// FirebaseAuth.instance.setSettings.appVerificationDisabledForTesting: true,
  

export const auth = getAuth(app);