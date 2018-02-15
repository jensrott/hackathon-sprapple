import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity, Image} from 'react-native';

import { Font } from 'expo';

/* COLORS STYLEHSHEET */
import { Colors } from '../../../utils/colors';
import { logInUser, registerUser } from '../../../utils/firebaseAuth';

const styles = StyleSheet.create({

});

export default class Card extends React.Component {
    render() {
        return(
            <View>
                <Text>User Card</Text>
            </View>
        );
    }
}