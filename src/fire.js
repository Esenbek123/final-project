import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4PMebtdBDwmqwLnLl6b2uIrHMN350iNw",
  authDomain: "final-project-auth-ebea5.firebaseapp.com",
  projectId: "final-project-auth-ebea5",
  storageBucket: "final-project-auth-ebea5.appspot.com",
  messagingSenderId: "141318049058",
  appId: "1:141318049058:web:8998aeab6f366316e6a97b",
  measurementId: "G-8FCESY6W0N",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
