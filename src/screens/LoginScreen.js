import React from 'react';
import {Container, Content, Button, Text, Form, Item, Input, Label, Body, Title, Icon, Toast } from 'native-base';
import { FirebaseAuth, FirebaseComplete } from '../firebase/firebase'
import firebase from 'firebase';
import { Keyboard } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showToats: false,
    }
  }
  logInUser () {
    Keyboard.dismiss()
    console.log("starting login");
    console.log("Email: " + this.state.email + " Password: " + this.state.password);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(e => {
      console.log('LogIn succeeded');
      Actions.home();
    })
    .catch(error => {
      console.log(error.code)
      switch(error.code) {
        case 'auth/invalid-email': 
          Toast.show({
            text: 'Enter a valid password!',
            position: 'bottom',
            buttonText: 'Okay',
          })
          break;
        case 'auth/user-not-found':
          Toast.show({
            text: "This email and password combination doesn't exist!",
            position: 'bottom',
            buttonText: 'Okay'
          })
          break;
        case 'auth/wrong-password':
          Toast.show({
            text: "Incorrect password!",
            position: 'bottom',
            buttonText: 'Okay'
          })
          break;
        default:
          Toast.show({
            text: error.message,
            position: 'bottom',
            buttonText: 'Okay',
          })
          break;
      }
    });
  }
  render() {
      return (
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input autoCorrect={false} autoCapitalize='none' keyboardType="email-address" onChangeText={email => this.setState({ email })} />
              </Item>
              <Item floatingLabel last style={{marginBottom: 50}}>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
              </Item>
              <Button block onPress={() => this.logInUser() }>
                <Text>Sign in</Text>
              </Button>
              <Text note style={{marginTop:15, alignSelf: 'center'}} onPress={() => Actions.signup()} >Don't have an account yet ? Sign up!</Text>
            </Form>
          </Content>
        </Container>
      );
  }
}