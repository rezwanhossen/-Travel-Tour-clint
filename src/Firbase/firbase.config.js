import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQN4Jc4HhB-7S6JZmaGamZJxyXtuBbgtU",
  authDomain: "turesom-assigment10.firebaseapp.com",
  projectId: "turesom-assigment10",
  storageBucket: "turesom-assigment10.appspot.com",
  messagingSenderId: "276549991570",
  appId: "1:276549991570:web:ee407c1858d4180c4c3a4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
