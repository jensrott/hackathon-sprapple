// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import RootStack from './modules/navigator/AppNavigator';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}