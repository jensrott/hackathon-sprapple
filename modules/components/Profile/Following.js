import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Following persons number component */
export class Following extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: []
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.following}</Text>
      </View>
    );
  }
}
