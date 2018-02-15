import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

// To use the SVGS
import Image from 'react-native-remote-svg' // -> npm install react-native-remote-svg --save

// Importing the icons
const homeIcon = require('../../assets/images/homeIcon.svg');
const homeIconWhite = require('../../assets/images/homeIconWhite.svg');
const leaderboardsIcon = require('../../assets/images/leaderboardsIcon.svg');
const leaderboardsIconWhite = require('../../assets/images/leaderboardsIconWhite.svg');
const achievementsIcon = require('../../assets/images/achievementsIcon.svg');
const achievementsIconWhite = require('../../assets/images/achievementsIconWhite.svg');

// footer
const Footer = () => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {Alert.alert('You tapped the home Button!');}} style={styles.homeButton}>
            <Image source={homeIconWhite} style={styles.footerButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Alert.alert('Leaderboard button!');} } style={styles.leaderboardsButton}>
            <Image source={leaderboardsIcon} style={styles.footerButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Alert.alert('Another button!');} } style={styles.achievementsButton}>
            <Image source={achievementsIcon} style={styles.footerButton}/>
        </TouchableOpacity>
    </View>
    
    
);


const styles = StyleSheet.create({
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

export default Footer;