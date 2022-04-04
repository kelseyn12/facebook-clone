import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHegOJyBptXTzQbOLEJpzj0eoCI0xv0hc",
    authDomain: "facebook-clone-871a3.firebaseapp.com",
    projectId: "facebook-clone-871a3",
    storageBucket: "facebook-clone-871a3.appspot.com",
    messagingSenderId: "696225024083",
    appId: "1:696225024083:web:e22b81f5f01c74ebc49ea6",
    measurementId: "G-2M04DFETKW"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export { auth, provider };
  export default db;