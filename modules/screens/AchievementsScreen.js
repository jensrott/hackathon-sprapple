import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// import our compenent we just created
import Footer from '../components/Footer';

export default class AchievementsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>AchievementsScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        < Footer />
      </View>
    );
  }
}