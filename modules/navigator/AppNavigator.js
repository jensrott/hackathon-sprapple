import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import LeaderboardsScreen from '../screens/LeaderboardsScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen, },
    Details: { screen: DetailsScreen, },
    Login: { screen: LoginScreen, },
    Feed: { screen: FeedScreen, },
    Profile: { screen: ProfileScreen, },
    Leaderboards: { screen: LeaderboardsScreen, },
    Achievements: { screen: AchievementsScreen, },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;