import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOvGw6Zy6lnWQS6oraVZoFZx15Zgj4ICk",
  authDomain: "basquet-central.firebaseapp.com",
  databaseURL: "https://basquet-central-default-rtdb.firebaseio.com",
  projectId: "basquet-central",
  storageBucket: "basquet-central.appspot.com",
  messagingSenderId: "954160968950",
  appId: "1:954160968950:web:f3c95d584d2c190655a8d7",
  measurementId: "G-XGP39YQYLF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
