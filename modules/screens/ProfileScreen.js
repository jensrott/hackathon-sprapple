import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// import our compenent we just created
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Profile/Card';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }
});

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        < Header title="User Profile" />
          < Card />
        < Footer />
      </View>
    );
  }
}