import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfvkYEePPRmIPSB55CYdsr3p48OLTlbIU",
  authDomain: "blog-react-24.firebaseapp.com",
  projectId: "blog-react-24",
  storageBucket: "blog-react-24.firebasestorage.app",
  messagingSenderId: "866537111640",
  appId: "1:866537111640:web:7715e4a4891b6f332dca2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize DB
const db = getFirestore(app);

export { auth, provider, db };
