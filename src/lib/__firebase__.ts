import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyBqOuLGziDmZsyF8MZK42THhosjOZSMbSw",
  authDomain: "novela-22321.firebaseapp.com",
  projectId: "novela-22321",
  storageBucket: "novela-22321.appspot.com",
  messagingSenderId: "838025701315",
  appId: "1:838025701315:web:c39285f42ed8707c757f76",
  measurementId: "G-7TPW995VYF",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const analytics = firebase.analytics();

export const firestoreFieldValue = firebase.firestore.FieldValue;
export const authBase = firebase.auth;
