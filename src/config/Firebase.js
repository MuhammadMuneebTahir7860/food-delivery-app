
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3FvASzMxWjmDldAtVEAIcsthV4h8Tngc",
    authDomain: "food-delivery-78.firebaseapp.com",
    projectId: "food-delivery-78",
    storageBucket: "food-delivery-78.appspot.com",
    messagingSenderId: "299415237398",
    appId: "1:299415237398:web:9d8ebf3bd06cf0392b5637",
    measurementId: "G-SLC8THF8C0"
  };

  firebase.initializeApp(firebaseConfig);

  export const db=firebase.firestore();
  export const userAuth=firebase.auth();