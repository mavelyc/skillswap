const admin = require('firebase-admin');
let serviceAccount = require('./serviceAccountKey.json');

// initializes firestore api for database access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
export default db; //export firestore database access to other modules as the variable 'db'