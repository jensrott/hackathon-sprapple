import React from 'react';
import {Container, Content, Button, Text, Form, Item, Input, Label, Body, Title, Icon, Toast } from 'native-base';
import { FirebaseAuth, FirebaseComplete } from '../firebase/firebase';
import firebase from 'firebase';
import { Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        displayName: "",
        email: "",
        password: "",
        showToats: false,
    }
  }
  signUpUser() {
    Keyboard.dismiss();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
        const user = firebase.auth().currentUser
        let photos = [
            'http://liquipedia.net/commons/images/9/92/PI_Bastion_Ganymede.png', 
            'http://liquipedia.net/commons/images/e/e3/Pi_switzerland.png', 
            'http://liquipedia.net/commons/images/e/eb/Pi_japan.png', 
            'http://liquipedia.net/commons/images/0/0a/PI_Warcraft_Varian_Wrynn.png',
            'http://liquipedia.net/commons/images/5/50/Route66.png',
            'http://liquipedia.net/commons/images/7/7b/PI_D.Va_Logo.png',
            'http://liquipedia.net/commons/images/3/3b/PI_Hanzo_Ouroboros.png',
            'http://liquipedia.net/commons/images/f/f3/PI_Target.png',
            'http://liquipedia.net/commons/images/7/71/PI_Mercy_Wing.png',
            'http://liquipedia.net/commons/images/2/2b/PI_S76_Logo.png',
            'http://liquipedia.net/commons/images/a/a4/PI_Winston_Peanut_Butter.png',
        ]; 
        const randomPhoto = photos[(Math.random() * photos.length) | 0]; 
        if(user) {
            user.updateProfile({
                displayName: this.state.displayName,
                photoURL: randomPhoto
            }).then(() => {
                firebase.database().ref('users/' + user.uid).set({
                    name: this.state.displayName,
                    email: this.state.email,
                    createdDate: firebase.database.ServerValue.TIMESTAMP,
                    followingCount:  0,
                    followerCount: 0,
                    kmTotal: 0,
                    coTotal: 0,
                    puntenTotal: 0,
                }).then(() => {
                    console.log('Added extra information to RealtimeDatabase')
                    Actions.home()
                }).catch(error => {
                    console.log(error.message);
                    user.delete().then(() => {
                        Actions.refresh();
                    }).catch(error => {
                        console.log(error.message);
                    })
                })
            }).catch(error => {
                console.log(error.message);
            })
        }
    })

  }
  render() {
      return (
        <Container>
          <Content>
            <Form>
                <Item floatingLabel>
                <Label>Name</Label>
                <Input autoCorrect={false} onChangeText={displayName => this.setState({ displayName })} />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input autoCorrect={false} autoCapitalize='none' keyboardType="email-address" onChangeText={email => this.setState({ email })} />
              </Item>
              <Item floatingLabel last style={{marginBottom: 50}}>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
              </Item>
              <Button block onPress={() => this.signUpUser() }>
                <Text>Sign up</Text>
              </Button>
                <Text note style={{marginTop:15, alignSelf: 'center'}} onPress={() => Actions.auth()} >Already have an account? Sign in!</Text>
            </Form>
          </Content>
        </Container>
      );
  }
}