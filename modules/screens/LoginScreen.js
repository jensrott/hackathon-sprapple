import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import LoginForm from '../components/LoginForm';
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <LoginForm/>
      </View>
    );
  }
}