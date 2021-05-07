import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCwzNGUnnvdUU4lpKU-6_dBWFaCiUXlvS0",
    authDomain: "challenge-ef010.firebaseapp.com",
    databaseURL: "https://challenge-ef010.firebaseio.com",
    projectId: "challenge-ef010",
    storageBucket: "challenge-ef010.appspot.com",
    messagingSenderId: "438646563499",
    appId: "1:438646563499:web:c15f13f583bb6651844dee",
    measurementId: "G-PNBD98HDR4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth();

   export { db, auth };