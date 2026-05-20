import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHi1ZbTw33wZcY08FK9oBZYOG16fzeVec",

  authDomain: "family-tree-d2ac4.firebaseapp.com",

  projectId: "family-tree-d2ac4",

  storageBucket: "family-tree-d2ac4.firebasestorage.app",

  messagingSenderId: "987666350269",

  appId: "1:987666350269:web:1837e3d2aa8890de9837d4",

  measurementId: "G-PP8VLPJRYF",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
