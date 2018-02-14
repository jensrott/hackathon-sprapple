import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

/* COLORS STYLEHSHEET */
import { Colors } from '../utils/colors';


const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: Colors.LIGHT_GREEN,
    width: 200,

  },

  buttonContainer: {
    backgroundColor: 'red', 
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttons: {
    marginBottom: 10,
  }
});


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.formContainer}>
          <TextInput style={{ height: 40, 
                              borderColor: 'gray', 
                              marginBottom: 10,
                              textAlign: 'center'
                            }} value="testjeeeee" />
                            
        <View style={styles.buttonContainer}>
          <Button onPress={console.log('pressed')} color={Colors.BROKEN_WHITE} title="Register" />
          <Button onPress={console.log('pressed')} title="Login" />
        </View>
      </View>
    );
  }
}
