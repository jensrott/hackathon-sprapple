import React from 'react';
import Expo from "expo";
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Button, Text, Content, Container, Header,Body , Left, Right, Icon, Title } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import AuthScreen from './src/screens/AuthScreen'
import AppFooter from './src/components/AppFooter';

import LeaderScreen from './src/screens/LeaderScreen';
import TabScreen from './src/screens/TabScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { initializeFirebase } from './src/firebase/firebase'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    }
    initializeFirebase();
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
      Roboto_medium: require('./src/assets/fonts/Roboto-Medium.ttf'),
    })
    this.setState({ isReady: true })
  }
  render() {
    if(!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
        <Container>
          <Router navigationBarStyle={{marginTop: StatusBar.currentHeight, backgroundColor: 'white', shadowOpacity: 0, elevation: 0}} >
            <Scene key="root" hideNavBar={false} swipeEnabled={true}  >
              <Scene
                key ="home"
                component={HomeScreen}
                title="Home"
                initial
              />
              <Scene
                key ="detail"
                component={DetailScreen}
                title="Detail"
                hideNavBar={true}
              />
              <Scene
                key ="auth"
                component={AuthScreen}
                title="Auth"
              />
              <Scene
                key ="tab"
                component={LeaderScreen}
                title="LeaderBoard"
              />
              <Scene
                key ="leader"
                component={TabScreen}
                title="TabScreen"
              />
              <Scene
                key ="profile"
                component={ProfileScreen}
                title="Profile"
              />
              
            </Scene>
          </Router>
          <AppFooter />
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


