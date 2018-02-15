import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

import Footer from '../components/Footer';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}