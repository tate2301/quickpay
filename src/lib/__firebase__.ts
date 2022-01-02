import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  /*
  apiKey: 'AIzaSyC-er4SimSB1tDD6RXiFjtJqFAScOTT4FU',
  authDomain: '*.firebaseapp.com',
  projectId: '****',
  storageBucket: '*.appspot.com',
  messagingSenderId: '****',
  measurementId: '***',
  */
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
