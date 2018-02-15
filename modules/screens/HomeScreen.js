import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// Import our component we just created
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
        <Button 
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button 
          title="Go to feed"
          onPress={() => this.props.navigation.navigate('Feed')}
        />
        {/* <Button 
          title="Go to leaderboard"
          onPress={() => this.props.navigation.navigate('Leaderboards')}
        /> Als we er op klikken krijgen we errors :p
        */}
        < Footer />
      </View>
    );
  }
}