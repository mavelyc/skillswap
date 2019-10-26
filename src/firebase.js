import firebase from "firebase";
let firebaseConfig = require('./serviceAccountKey.json');

// initializes firestore api for database access
firebase.initializeApp(firebaseConfig);

export default firebase; //export firestore database access to other modules as the variable 'db'