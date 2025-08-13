// Firebase setup for role-based access
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb5qFLbaAY5dIsZJKkmwpwHN-rpAaQeEI",
  authDomain: "ai-learning-platform-f9093.firebaseapp.com",
  projectId: "ai-learning-platform-f9093",
  storageBucket: "ai-learning-platform-f9093.firebasestorage.app",
  messagingSenderId: "175324646066",
  appId: "1:175324646066:web:eb4a3f2bfd6c71be3dd7ab",
  measurementId: "G-KYLWTZPR1X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
