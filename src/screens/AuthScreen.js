import React, { Component } from 'react';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import LogoutScreen from './LogoutScreen';
import AppLoading from '../components/AppLoading'

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userData: null,
      loading: true,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        // Get data from realtime database
        firebase.database().ref('users').child(user.uid).once('value', (snapshot) => {
          //console.log(snapshot);
          this.setState({userData: snapshot.val(), user: user, loading: false})
          
        });
      }
      else {
        this.setState({user: null, loading: false});
      }
    });
  }
  render() {
    if (this.state.loading) {
      return (<AppLoading />)
    }
    else {
      if (!this.state.user) {
        return (<LoginScreen />)
      }
      else {
        return(<LogoutScreen user={this.state.user} userData={this.state.userData}/>)
      }
    }
  }
}