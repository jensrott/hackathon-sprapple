import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';



// footer
export class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'profilePictureUrl' : this.props.profilePictureUrl
        }
    }

    render() {
        return(
            <View>
                <Image source={this.state.profilePictureUrl}/>
            </View>
        );
    }
}