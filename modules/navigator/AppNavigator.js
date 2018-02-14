import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen, },
    Details: { screen: DetailsScreen, },
    Login: { screen: LoginScreen, },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;