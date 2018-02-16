import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,} from 'react-native';

// To use the SVGS
import Image from 'react-native-remote-svg'
const homeIconWhite = require('../../assets/images/homeIconWhite.svg');
const leaderboardsIcon = require('../../assets/images/leaderboardsIcon.svg');
const achievementsIcon = require('../../assets/images/achievementsIcon.svg');

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
        <Button 
          title="Go to achievements"
          onPress={() => this.props.navigation.navigate('Achievements')}
        /> 
        {/* FOOTER BUTTONS */}        
        <View style={styles.container}>
            <TouchableOpacity style={styles.homeButton}>
                <Image source={homeIconWhite} style={styles.footerButton} />
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
      backgroundColor: '#044c47', 
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