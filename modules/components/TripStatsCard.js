import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/* Tripstats card component */
export class TripStatsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Co2: '',
      distance: '',
      likes: ''
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.Co2}</Text>
        <Text>{this.state.distance}</Text>
        <Text>{this.state.likes}</Text>
      </View>
    );
  }
}
