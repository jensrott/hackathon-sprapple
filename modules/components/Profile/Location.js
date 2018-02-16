import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Location component */
export class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: ''
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.city}</Text>
        <Text>{this.state.country}</Text>
      </View>
    );
  }
}
