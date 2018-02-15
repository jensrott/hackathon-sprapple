import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import RootStack from './modules/navigator/AppNavigator';
import { initializeApp } from 'firebase';
import { initializeFirebase, listenFirebaseChanges, firebaseAuth } from './utils/firebaseService';

export default class App extends React.Component {
  componentWillMount() {
    initializeFirebase();
    const firebaseRef = listenFirebaseChanges();
    const fbtest = firebaseRef.ref('/test/').once('value');
    fbtest.then((snapshot) => {
      console.log(snapshot);
    });
  }
  
  render() {
    return <RootStack />;
  }
}
