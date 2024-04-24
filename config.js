import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwIw1KqE1quvZA3PevbLTuMFWDlXFUYCE",
    authDomain: "travelapp-c4f24.firebaseapp.com",
    projectId: "travelapp-c4f24",
    storageBucket: "travelapp-c4f24.appspot.com",
    messagingSenderId: "472371642095",
    appId: "1:472371642095:web:172d550aa2c366ecc4e51a",
    measurementId: "G-Z2S7JXSKGS"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export{firebase};
  