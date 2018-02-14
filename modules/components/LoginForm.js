import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
/* COLORS STYLEHSHEET */
import { Colors } from '../../utils/colors';
import { logInUser, registerUser } from '../../utils/firebaseAuth';

const styles = StyleSheet.create({
  formContainer: {
    width: 400,
  },
  loginForm: {
    height:60,
    textAlign: 'left',
    marginBottom:20,
  },
  loginButton: {
    height:60,
    marginBottom:20,
    backgroundColor: Colors.DARK_GREEN,
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: 'raleway-thin',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: Colors.DARK_GREEN,
    marginBottom: 50,
    fontFamily: 'open-sans-bold',
  }
});


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  async componentDidMount(){
    await Font.loadAsync({ 'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'), 'raleway-thin': require('../../assets/fonts/Raleway-Thin.ttf')});
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.formContainer}>
      {this.state.fontLoaded ? ( <Text style={styles.title}>GREEWARD</Text> ) : null}
          <TextInput style={styles.loginForm} placeholder="email" onChangeText={(email) => this.setState({email})} />
          <TextInput style={styles.loginForm} placeholder="password" secureTextEntry={true} onChangeText={(password) =>this.setState({password})} />
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
