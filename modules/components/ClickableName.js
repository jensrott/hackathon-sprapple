import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from 'react-native';

export class ClickableName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.name,
            url: this.props.url
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(this.state.url)} style={}>
                <Text style={styles.h2}>{this.state.name}</Text>
            </TouchableOpacity>
        )
    }
}