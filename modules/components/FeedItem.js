import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ClickableName } from './ClickableName';
import { ProfilePicture } from './ProfilePicture';
import { TestUser } from '../../utils/TestUser';

export class FeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'user': this.props.user,
        }
    }
    render() {
        return (
            <View>
                <ProfilePicture src={this.state.user.profilePictureUrl}/>
                <ClickableName name={this.state.user.firstName + this.state.user.lastName}></ClickableName>
                <TripStats></TripStats>
                <Likes></Likes>
            </View>
        )
    }
}