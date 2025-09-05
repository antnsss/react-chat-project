// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHdtinuDaWaMimDoCPL7Cat-PyG4pugI",
  authDomain: "chat-e608a.firebaseapp.com",
  projectId: "chat-e608a",
  storageBucket: "chat-e608a.firebasestorage.app",
  messagingSenderId: "415123001656",
  appId: "1:415123001656:web:1ccb07bef6084c18bd71cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);