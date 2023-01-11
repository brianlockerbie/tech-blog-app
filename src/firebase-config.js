// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABgp7p2neV9sW7RoUNTnx86G_HVfl3y1M",
  authDomain: "tech-blog-app-3a048.firebaseapp.com",
  projectId: "tech-blog-app-3a048",
  storageBucket: "tech-blog-app-3a048.appspot.com",
  messagingSenderId: "419567722052",
  appId: "1:419567722052:web:fd59ec92e342c5cc90a611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();