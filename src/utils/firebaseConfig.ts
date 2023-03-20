import "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYQvghtj7nTxjBplmNZLKlCzdaxFj7xEs",
  authDomain: "kisan-5d17b.firebaseapp.com",
  projectId: "kisan-5d17b",
  storageBucket: "kisan-5d17b.appspot.com",
  messagingSenderId: "905501999775",
  appId: "1:905501999775:web:6417bc99e362f0d5dd58aa",
  measurementId: "G-PB3YPW462F",
};

export const firebasePrimaryAppNew = !firebase?.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : undefined;

const firebasePrimaryApp = firebasePrimaryAppNew || firebase.app();
export default firebasePrimaryApp;
