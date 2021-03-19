import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBqmfuuPh65aE3pph4kQgcdOdYUu0j8DHY",
    authDomain: "mahima-40eee.firebaseapp.com",
    projectId: "mahima-40eee",
    storageBucket: "mahima-40eee.appspot.com",
    messagingSenderId: "716897783468",
    appId: "1:716897783468:web:bf1c0d53edac8581d71909"
  };


  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;
