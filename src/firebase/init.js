
import firebase from 'firebase/app';
require('firebase/firestore');

// Initialize Firebase
const config = {
   apiKey: "AIzaSyD7XqudNQZXkdO2n6I_OqkuFwG34IxtPlQ",
   authDomain: "chat-app-fb1e0.firebaseapp.com",
   databaseURL: "https://chat-app-fb1e0.firebaseio.com",
   projectId: "chat-app-fb1e0",
   storageBucket: "chat-app-fb1e0.appspot.com",
   messagingSenderId: "1004495103266"
 };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots:true });

 //export firestore database
 export default firebaseApp.firestore();

