import firebase from 'firebase';

import firebaseConfig from './firebaseConfig.json';

export function initializeFirebase() {
  if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === '<YOUR-API-KEY>') {
      throw new Error('Add your own firebaseConfig.json file in the folder /utils/firebaseConfig.json');
    } else {
        console.log("Initializing firebase.");
        firebase.initializeApp(firebaseConfig);
    }
}



export function registerUser (email,password,name) {
  console.log("Starting registration");
  console.log("Email: " + email + " Password: " + password);
  // Randoms
  const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
  const puntenTotal = Math.round(Math.random()*20);
  const coTotal = Math.random(0,1) * puntenTotal;
  const kmTotal = Math.round(Math.random()*10);
  const followerCount = Math.round(Math.random()*50);
  const follwingCount = Math.round(Math.random()*50);

  // Update user with displayName
  promise.then(e => {
    const user = firebase.auth().currentUser;
    console.log('Start creating user ...');
    if (user != null) {
      user.updateProfile({
        displayName: name,
      }).then(function () {
        console.log('DisplayName added succesfully.');
        // Store user in realtime database
        firebase.database().ref('users/' + user.uid).set({
          email: email,
          name: name,
          puntenTotal: puntenTotal,
          coTotal: coTotal,
          kmTotal: kmTotal,
          followerCount: followerCount,
          followingCount: follwingCount,
          createdDate: firebase.database.ServerValue.TIMESTAMP,
        }).then(e => {
          console.log('Added needed user-info to realtime database');
        }).catch(e => {
          console.log(e.message);
        });
      }).catch(function (error) {
        console.log('Failed to add DisplayName.');
      })
    } else {
      console.log('no user');
    }
  });
  promise.catch(e => console.log(e.message));

}

export function FirebaseDatabase() {
  return firebase.database();
}
export function FirebaseComplete() {
  return firebase;
}
export function FirebaseAuth() {
  return firebase.auth();
}