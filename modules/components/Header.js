import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity, Image} from 'react-native';

import { Font } from 'expo';
/* COLORS STYLEHSHEET */
import { Colors } from '../../utils/colors';
import { logInUser, registerUser } from '../../utils/firebaseAuth';

const styles = StyleSheet.create({

    container: {},

    headerContainer: {
		  backgroundColor: Colors.DARK_GREEN,
			width: 400,
			height: 100,
			justifyContent: 'center',
			alignItems: 'center',
		},
		
		profilePicture: {
			width: 200, 
			height:200, 
			borderRadius: 50,
			backgroundColor: 'red',

		},

    headerText: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#fff',
    },

    totalScore: {
        fontSize: 10,
        position: 'absolute',
        top: 30,
				left: 30,
				color: Colors.LIGHT_GREEN,
    }
});

export default class Header extends React.Component {
    render() {
        return(
					<View style={styles.container}>
						<View style={styles.headerContainer}>
							<Text style={styles.headerText}>{this.props.title}</Text>
							<Image style={styles.profilePicture} source={this.props.picture}></Image>
							<Text style={styles.totalScore}>465</Text>
						</View>
					</View>
        );
    }
}