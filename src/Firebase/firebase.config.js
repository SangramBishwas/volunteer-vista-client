// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNDYIwMdBc5HO41xKROZRe_6SJPG7uewk",
    authDomain: "assignment-11-7da79.firebaseapp.com",
    projectId: "assignment-11-7da79",
    storageBucket: "assignment-11-7da79.appspot.com",
    messagingSenderId: "108484742032",
    appId: "1:108484742032:web:ac83d67cc5739db56ec115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;