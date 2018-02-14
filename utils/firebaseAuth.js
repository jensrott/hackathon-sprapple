import { initializeFirebase, listenFirebaseChanges, firebaseAuth } from './firebaseService';

import * as firebase from 'firebase';

export function logInUser (email,password) {
  console.log("starting login");
  console.log("Email: " + email + " Password: " + password);
  const promise = firebase.auth().signInWithEmailAndPassword(email, password);
  promise.then(e => {
    console.log('LogIn succeeded');
  });
  promise.catch(e => console.log(e.message));
}

export function registerUser (email,password) {
  console.log("Starting registration");
  console.log("Email: " + email + " Password: " + password);
  const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
  promise.then(e => {
    console.log('Registration succeeded!');
  });
  promise.catch(e => console.log(e.message));
}