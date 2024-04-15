import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDv2hQIwiHtZrQIRLVeBVP1cLc4a1FtYgA",
  authDomain: "site-fullstack-fiap.firebaseapp.com",
  projectId: "site-fullstack-fiap",
  storageBucket: "site-fullstack-fiap.appspot.com",
  messagingSenderId: "666420552177",
  appId: "1:666420552177:web:b05f069e82e05e79eaa450",
  measurementId: "G-605JNNZL25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);