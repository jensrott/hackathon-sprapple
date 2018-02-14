import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export function initializeFirebase() {
    if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === '<YOUR-API-KEY>') {
        throw new Error('Add your own firebaseConfig.json file in the folder /utils/firebaseConfig.json');
      } else {
          // Initialize the firebase app
          console.log("Initializing firebase.");
          firebase.initializeApp(firebaseConfig);
      }
}

export function sendData() {
  let defaultFirebase = firebase.database();
  let test = defaultFirebase.ref('test');
  test.on('child_added', function(snapshot) {
    console.log(snapshot);
  });

}

// Returns a firebase Database reference
export function listenFirebaseChanges() {
  return firebase.database();
}

export function firebaseAuth() {
  return firebase.auth();
}

