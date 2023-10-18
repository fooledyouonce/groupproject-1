// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBHzZo3Uw7TEiccDCWx22-DUvEYvz_ha8",
  authDomain: "food-fight-43148.firebaseapp.com",
  projectId: "food-fight-43148",
  storageBucket: "food-fight-43148.appspot.com",
  messagingSenderId: "17373664875",
  appId: "1:17373664875:web:6ddedf96f58aea0518832e",
  measurementId: "G-L48Y6WCYFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);