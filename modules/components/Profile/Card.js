import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { Font } from 'expo';

/* COLORS STYLEHSHEET */
import { Colors } from '../../../utils/colors';
import { logInUser, registerUser } from '../../../utils/firebaseAuth';

/* Importing the components for the Card so we only need to import once */
import ProfilePicture from './ProfilePicture';
import Followers from './Followers';
import Following from './Following';
import Name from './Name';
import Location from './Location';


const styles = StyleSheet.create({});

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
				<Text>User Card</Text>
					<Name />	
					<Location />
					<ProfilePicture />
					<Followers />
					<Following />
      </View>
    );
  }
}
