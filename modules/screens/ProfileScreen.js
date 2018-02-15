import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// import our compenent we just created
import Footer from '../components/Footer';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        < Footer />
      </View>
    );
  }
}