import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';

import { Font } from 'expo';
/* COLORS STYLEHSHEET */
import { Colors } from '../../utils/colors';
import { logInUser, registerUser } from '../../utils/firebaseAuth';

const styles = StyleSheet.create({
  loginButton: {
    height: 60,
    marginBottom: 20,
    backgroundColor: Colors.DARK_GREEN,
    justifyContent: 'center',
    borderRadius: 10
  },
  loginButtonText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: 'raleway-thin'
  }
});

export default class Button extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			email: "",
      password: ""
		}
	}

	render() {
		return(
			<View>
				<TouchableOpacity onPress={() => registerUser(this.state.email, this.state.password)} style={styles.loginButton}>
				{this.state.fontLoaded ? (<Text style={styles.loginButtonText}>Register</Text>) : null}
				</TouchableOpacity>
				<TouchableOpacity onPress={() => logInUser(this.state.email, this.state.password)} style={styles.loginButton}>
				{this.state.fontLoaded ? (<Text style={styles.loginButtonText}>Login</Text>) : null}
				</TouchableOpacity>
			</View>
		);
	}
}
