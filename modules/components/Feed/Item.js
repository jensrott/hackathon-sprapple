import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity, Image} from 'react-native';

import { Font } from 'expo';

/* COLORS STYLEHSHEET */
import { Colors } from '../../../utils/colors';
import { logInUser, registerUser } from '../../../utils/firebaseAuth';

const styles = StyleSheet.create({

});

/* Feed-Item */
export default class Item extends React.Component {
    render() {
        return(
            <View>
                <Text>John Doe</Text>
                <Text>CO2</Text>
                <Text>Km</Text>
                <Text>pts</Text>
                <Text>Adress</Text>
            </View>
        );
    }
}