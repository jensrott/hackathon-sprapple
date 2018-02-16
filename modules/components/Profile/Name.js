import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Location component */
export class Name extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: ''
    };
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.firstname} {this.state.lastname}
        </Text>
      </View>
    );
  }
}
