import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Followers number component */
export class Followers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: []
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.followers}</Text>
      </View>
    );
  }
}
