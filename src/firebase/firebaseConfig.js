import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBrsxpI5c245e_xtlsXoJtu7vwTBg7Q3Uc",
    authDomain: "higia-130601.firebaseapp.com",
    projectId: "higia-130601",
    storageBucket: "higia-130601.appspot.com",
    messagingSenderId: "450668878191",
    appId: "1:450668878191:web:043eb3a2198edfb23f309a"
  };

  const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);

