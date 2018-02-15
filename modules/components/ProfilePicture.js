import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';



// footer
export class ProfileImage extends Component {
    constructor() {
        super(props);

        this.state = {
            profilePicture = this.props.profilePicture
        }
    }

    render() {
        return(
            <View>
                <Image source={this.state.profilePicture}/>
            </View>
        );
    }
}