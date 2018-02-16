import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,} from 'react-native';

// import our compenent we just created
import Header from '../components/Header';
import FeedItem from '../components/FeedItem';

// To use the SVGS
import Image from 'react-native-remote-svg'
const homeIcon = require('../../assets/images/homeIcon.svg');
const leaderboardsIconWhite = require('../../assets/images/leaderboardsIconWhite.svg');
const achievementsIcon = require('../../assets/images/achievementsIcon.svg');


export default class LeaderboardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        < Header title="Leaderboard" picture="../../assets/placeholder.png" />
          <Text>Global</Text>
          < FeedItem />
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.homeButton}>
                <Image source={homeIcon} style={styles.footerButton} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.leaderboardsButton}>
                <Image source={leaderboardsIconWhite} style={styles.footerButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Achievements')}  style={styles.achievementsButton}>
                <Image source={achievementsIcon} style={styles.footerButton}/>
            </TouchableOpacity>
        </View>   
      </View>
    );
  }
}


const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      bottom:0,
  },
  footerButton: {
      height: 50,
  },
  homeButton: {
      flex: 0.3333,
      justifyContent: 'space-between',
      alignItems: 'center', 
      borderColor: '#bbb',
      borderRightWidth: StyleSheet.hairlineWidth, 
      backgroundColor: 'white',
  },
  leaderboardsButton: {
      flex: 0.3333,
      justifyContent: 'space-between',
      alignItems: 'center', 
      borderColor: '#bbb',
      borderRightWidth: StyleSheet.hairlineWidth, 
      backgroundColor: '#044c47', 
  },
  achievementsButton: {
      flex: 0.3333,
      justifyContent: 'space-between',
      alignItems: 'center',  
      borderColor: '#bbb', 
      backgroundColor: 'white',  
  },
});