import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Font } from 'expo';
/* COLORS STYLESHEET */
import { Colors } from '../../utils/colors';
import { logInUser, registerUser } from '../../utils/firebaseAuth';

const styles = StyleSheet.create({
  loginForm: {
      height:60,
      textAlign: 'left',
      marginBottom:20,
    },
});

export default class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  
  render() {
    return (
      <View>
        <TextInput
          style={styles.loginForm}
          placeholder="email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.loginForm}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
      </View>
    );
  }
}
