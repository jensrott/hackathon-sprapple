import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,} from 'react-native';

// To use the SVGS
import Image from 'react-native-remote-svg'
const homeIcon = require('../../assets/images/homeIcon.svg');
const leaderboardsIcon = require('../../assets/images/leaderboardsIcon.svg');
const achievementsIconWhite = require('../../assets/images/achievementsIconWhite.svg');

export default class AchievementsScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}><Text>Achievement screen</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.homeButton}>
            <Image source={homeIcon} style={styles.footerButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Leaderboards')} style={styles.leaderboardsButton}>
            <Image source={leaderboardsIcon} style={styles.footerButton} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.achievementsButton}>
            <Image source={achievementsIconWhite} style={styles.footerButton}/>
        </TouchableOpacity>
    </View>      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
      backgroundColor: '#044c47',    
  },
});