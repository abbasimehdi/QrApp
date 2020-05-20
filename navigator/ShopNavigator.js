import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QrCodeGenerator from '../components/packages/QrCodeGenerator';
import QrCodeScanner from '../components/packages/QrCodeScanner';
import HomeScreen from '../screens/home/HomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import colors from '../constants/colors';
const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    QrScanner: QrCodeScanner,
    QrGenerator: QrCodeGenerator
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: ""
      },
      headerTintColor: colors.primary,
      headerTitle: 'Qr App'
    }
  }
);


const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: ""
      },
      headerTintColor: colors.primary,
      headerTitle: 'Authenticate'
    }
  }
);

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Home: HomeNavigator
});
export default createAppContainer(MainNavigator);
