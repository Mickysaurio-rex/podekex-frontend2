// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUoASpdoCRZs-4FFJzRT3W5JBBUvlZDVM",
  authDomain: "pokedexmicky.firebaseapp.com",
  projectId: "pokedexmicky",
  storageBucket: "pokedexmicky.appspot.com",
  messagingSenderId: "155046882595",
  appId: "1:155046882595:web:c6f3ee6ee4c809ba8c7096",
  measurementId: "G-N3257ML9QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.log(err);
    return err;
  }
};

export {
  auth,
  logInWithEmailAndPassword
};

const analytics = getAnalytics(app);