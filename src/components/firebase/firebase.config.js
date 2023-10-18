// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGd2VjinIuW4kSxKjDUmUtnAzTRaMA2Tc",
  authDomain: "techeon-web.firebaseapp.com",
  projectId: "techeon-web",
  storageBucket: "techeon-web.appspot.com",
  messagingSenderId: "491388457616",
  appId: "1:491388457616:web:8e9ed74a9a58b55aad7e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;