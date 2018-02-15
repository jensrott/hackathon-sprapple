import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from 'react-native';

import { fonts_headings } from '../../modules/styles/fonts_headings'

export class ClickableName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.name,
            url: this.props.url
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(this.state.url)}>
                <Text>{this.state.firstName}</Text>
            </TouchableOpacity>
        )
    }
}