import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCcxRaQ9X5KDOs3j8mvbKnAPyX0uIK7pz0",
  authDomain: "thrivo-4abbc.firebaseapp.com",
  projectId: "thrivo-4abbc",
  storageBucket: "thrivo-4abbc.firebasestorage.app",
  messagingSenderId: "789514110100",
  appId: "1:789514110100:web:146e12976d70fe802e2081"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;