import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, List, ListItem, Icon, Toast } from 'native-base';
import firebase from 'firebase'


export default class LogoutScreen extends React.Component {
  logout() {
    console.log('clicked logout')
    firebase.auth().signOut()
    .then(() => {
      Toast.show({
        text: 'Succesfully logged out',
        position: 'bottom',
        buttonText: 'Okay',
      })
    })
    .catch(e => console.log(e.error))
  }
  deleteAccount() {
    firebase.auth().currentUser.delete().then(() => {
      Toast.show({
        text: 'Account succesfully removed',
        position: 'bottom',
        buttonText: 'Okay',
      })
    }).catch(error => {
      Toast.show({
        text: error.message,
        position: 'bottom',
        buttonText: 'Okay',
      })
    })
  }
  render() {
    const user = this.props.user
    const userData = this.props.userData
    console.log(userData);
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemHeader first style={styles.itemHeader}>
            <Text>Account</Text>
          </ListItem> 
          <ListItem>
            <Text>Name: {user.displayName}</Text>
          </ListItem>
          <ListItem>
            <Text>Email: {user.email}</Text>
          </ListItem>
          <ListItem>
            <Text>Created at: {userData.createdDate}</Text>
          </ListItem>
          <ListItem>
            <Text>Id: {user.uid}</Text>
          </ListItem>
          <ListItem itemHeader first style={styles.itemHeader}>
            <Text>Overall stats</Text>
          </ListItem> 
          <ListItem>
            <Icon name='ios-trophy-outline' style={{fontSize: 20}}/>
            <Text> {userData.puntenTotal} points</Text>
          </ListItem>
          <ListItem>
            <Icon name='ios-bicycle' style={{fontSize:20}}/>
            <Text> {userData.kmTotal} km</Text>
          </ListItem>
          <ListItem>
            <Icon name='ios-leaf-outline' style={{fontSize:20}}/>
            <Text> {(userData.coTotal).toFixed(2)} gram co2 bespaard</Text>
          </ListItem>
          <ListItem itemHeader first style={styles.itemHeader}>
            <Text>Social stats</Text>
          </ListItem> 
          <ListItem>
            <Text>Followers: {userData.followerCount}</Text>
          </ListItem>
          <ListItem>
            <Text>Following: {userData.followingCount}</Text>
          </ListItem>
        </List>
        <Button block onPress={() => this.logout()}>
          <Text>Sign out</Text>
        </Button>
        <Button danger block onPress={() => this.deleteAccount()} >
          <Text>Delete my account </Text>
        </Button>
      </Content>
    </Container>
    )
  }
}
const styles = StyleSheet.create({
  itemHeader: {
    backgroundColor: 'white',
  }
});