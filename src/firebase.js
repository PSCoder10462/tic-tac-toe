import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAO8YBKfMJF86knbunLkpQWyJbOFnwmv6A",
  authDomain: "tiq-taq-toe.firebaseapp.com",
  projectId: "tiq-taq-toe",
  storageBucket: "tiq-taq-toe.appspot.com",
  messagingSenderId: "770948954272",
  appId: "1:770948954272:web:2cfdf6987862d9499171c5",
  measurementId: "G-V3ZZCF5MQ9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
