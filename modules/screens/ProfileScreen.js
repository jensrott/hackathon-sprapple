import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,} from 'react-native';

// import our compenent we just created
import Header from '../components/Header';
import Card from '../components/Profile/Card';

// To use the SVGS
import Image from 'react-native-remote-svg'
const homeIcon = require('../../assets/images/homeIcon.svg');
const leaderboardsIcon = require('../../assets/images/leaderboardsIcon.svg');
const achievementsIcon = require('../../assets/images/achievementsIcon.svg');

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        < Header title="User Profile" picture="../../assets/placeholder.png" />
          < Card />
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.homeButton}>
                <Image source={homeIcon} style={styles.footerButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Leaderboards')} style={styles.leaderboardsButton}>
                <Image source={leaderboardsIcon} style={styles.footerButton} />
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
      backgroundColor: 'white', 
  },
  achievementsButton: {
      flex: 0.3333,
      justifyContent: 'space-between',
      alignItems: 'center',  
      borderColor: '#bbb', 
      backgroundColor: 'white',  
  },
});