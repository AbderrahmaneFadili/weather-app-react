import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ3qg0_9XDf98ius8KxdyRHkglWeDURPM",
  authDomain: "weather-app-db-8296f.firebaseapp.com",
  projectId: "weather-app-db-8296f",
  storageBucket: "weather-app-db-8296f.appspot.com",
  messagingSenderId: "492420737190",
  appId: "1:492420737190:web:9ef68132dfafa02a83ec67",
  measurementId: "G-9BNFHETH06",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
