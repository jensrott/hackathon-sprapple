import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// import our compenent we just created
import Footer from '../components/Footer';
import Header from '../components/Header';

import FeedItem from '../components/FeedItem';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }
});

export default class LeaderboardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        < Header title="Leaderboard" picture="../../assets/placeholder.png" />
          <Text>Global</Text>
          < FeedItem />
        < Footer />
      </View>
    );
  }
}