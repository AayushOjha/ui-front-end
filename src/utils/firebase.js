import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCvlFb8BvksMfJfHtqILfDA-CVQYPuMJwI",
  authDomain: "ui-lib-28dfb.firebaseapp.com",
  projectId: "ui-lib-28dfb",
  storageBucket: "ui-lib-28dfb.appspot.com",
  messagingSenderId: "701960123082",
  appId: "1:701960123082:web:307cea0924275547603a33",
  measurementId: "G-NN90GCKH4E",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
