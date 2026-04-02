// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgYceQNfQh8KHe4rVqm9gkwJSI4E-FhMo",
  authDomain: "cafeteria-react.firebaseapp.com",
  projectId: "cafeteria-react",
  storageBucket: "cafeteria-react.firebasestorage.app",
  messagingSenderId: "625003267116",
  appId: "1:625003267116:web:8257198084f56d3acf7d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);