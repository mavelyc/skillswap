const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const admin = require('firebase-admin');

let serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let docRef = db.collection('users').doc('alovelace');

let setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data().first);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  



// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/:user', (req,res) => {
//     res.send('Hello World');
// });



app.listen(port, () => {
    console.log(`App is running on ${port}`);
});