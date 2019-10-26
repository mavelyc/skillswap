import firebase from "firebase";
let firebaseConfig = require('./serviceAccountKey.json');

// initializes firestore api for database access
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export default db; //export firestore database access to other modules as the variable 'db'