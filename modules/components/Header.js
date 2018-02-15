import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity, Image} from 'react-native';

import { Font } from 'expo';
/* COLORS STYLEHSHEET */
import { Colors } from '../../utils/colors';
import { logInUser, registerUser } from '../../utils/firebaseAuth';

const styles = StyleSheet.create({
    totalScore: {
        fontSize: 10,
        position: 'absolute',
        top: 100,
        left: 100,
    }
});

export default class Header extends React.Component {
    render() {
        return(
            <View>
                <Text>{this.props.title}</Text>
                <Image source="../../../assets/images" style={{width: 20, height:20, borderRadius: 50}}></Image>
                <Text style={styles.totalScore}>465</Text>
            </View>
        );
    }
}