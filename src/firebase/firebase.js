import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDueT8tDjIOnPbHozo5Ea5BUUrJdcVbmbs",
  authDomain: "footballpongdb.firebaseapp.com",
  projectId: "footballpongdb",
  storageBucket: "footballpongdb.appspot.com",
  messagingSenderId: "618518676972",
  appId: "1:618518676972:web:54a91d8629bc325ca2ecc9",
  measurementId: "G-3QJWQ45W1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


