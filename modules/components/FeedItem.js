import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ClickableName } from './modules/components/ClickableName';
import { ProfilePicture } from './modules/components/ProfilePicture';

export class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }
    render() {
        return (
            // <View style={styles.container}>
            //     <ProfilePicture src={this.state.user.profilePicture} url={/*TODO: Add way to go to user profile url*/}/>
            //     <ClickableName name={this.state.user.firstName + this.state.user.lastName}></ClickableName>
            // </View>
            <View>
                <ProfilePicture src={'a url'}/>
                <ClickableName name={'john' + 'doe'}></ClickableName>
            </View>
        )
    }
}