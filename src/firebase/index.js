/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD12wOCHe1_qqPyLTkHZoOanYevWTHFrro",
  authDomain: "react-comic-store.firebaseapp.com",
  projectId: "react-comic-store",
  storageBucket: "react-comic-store.appspot.com",
  messagingSenderId: "275189311112",
  appId: "1:275189311112:web:a1f31e6aa7fd1cd0cca13d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD12wOCHe1_qqPyLTkHZoOanYevWTHFrro",
    authDomain: "react-comic-store.firebaseapp.com",
    projectId: "react-comic-store",
    storageBucket: "react-comic-store.appspot.com",
    messagingSenderId: "275189311112",
    appId: "1:275189311112:web:a1f31e6aa7fd1cd0cca13d"
  };  
    
  const app = initializeApp(firebaseConfig);
  export const getFirebase = () => app;
  export { getFirestore };