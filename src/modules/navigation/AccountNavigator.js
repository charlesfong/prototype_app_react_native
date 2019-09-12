import {  createStackNavigator } from 'react-navigation';
import CheckLogin from '../auth/CheckLogin'
import LoginScreen from '../auth/LoginScreen'
import ProfileScreen from '../profile/Profile'

export default AccountNavigator = createStackNavigator(
    {
        CheckLogin: {
            screen: CheckLogin,
            // screen: SelectCountry,
            navigationOptions: {
              header: null,
            },
          },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
              header: null,
            },
          },
        Profile:{
            screen: ProfileScreen,
            navigationOptions: {
              header: null,
            },
        }
    },{
        initialRouteName: CheckLogin 
    }
)