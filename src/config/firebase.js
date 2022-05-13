import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5cmsk3suUIfkjbHsYQboLhqMJO6V15vU",
    authDomain: "social-app-9dfd5.firebaseapp.com",
    projectId: "social-app-9dfd5",
    storageBucket: "social-app-9dfd5.appspot.com",
    messagingSenderId: "181235713324",
    appId: "1:181235713324:web:a44ceaff6cd44892901889"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);

export const database = getFirestore();