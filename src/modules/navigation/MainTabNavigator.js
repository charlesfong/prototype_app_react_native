import React from 'react';
import { Image, View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, StackActions, NavigationActions, createAppContainer } from 'react-navigation';

import { colors, fonts } from '../../styles';


import HomeScreen from '../home/HomeViewContainer';
// import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import ProductScreen from '../product/ProductDetails';
import CartScreen from '../product/Cart';
import CategoryScreen from '../category/CategoryView';
import ComponentsScreen from '../components/ComponentsViewContainer';
import LoginScreen from '../auth/LoginScreen';
import CheckLogin from '../auth/CheckLogin';
// eslint-disable-next-line import/no-cycle
import Profile from '../profile/Profile';
import ProductDetailScreen from '../product/ProductDetails';
// eslint-disable-next-line import/no-cycle
import stackNavigator from './RootNavigation';
import AccountNavigator from './AccountNavigator'

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconPromo = require('../../../assets/images//tabbar/promo.png');
const iconStore = require('../../../assets/images//tabbar/store.png');
const iconWishlist = require('../../../assets/images//tabbar/wishlist.png');
const iconAccount = require('../../../assets/images//tabbar/account.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/cart.png');
// const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const hederBackground = require('../../../assets/images/bggreenwaki.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  tabBarIconFocused: {
    tintColor: '#048c4c',
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});


const stackNavigators = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
    ProductDetail: {
      screen: ProductDetailScreen,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const HomeTab = createStackNavigator(
  {
    Home: HomeScreen ,
  },
  {
    // initialRouteName:'HomeScreen',
    defaultNavigationOptions: {
      header: null,
    },
  }
);
const AccountTab = createStackNavigator(
  {
    CheckLogin: CheckLogin ,
    Login: LoginScreen,
    Profile: Profile,
  },
  {
    initialRouteName:'CheckLogin',
    defaultNavigationOptions: {
      header: null,
    },
  }
);
const ProductTab = createStackNavigator(
  {
    // ProductDetail: ProductDetailScreen,
    Product: GridsScreen ,
    // Cart: CartScreen,
  },
  {
    initialRouteName:'Product',
    defaultNavigationOptions: {
      header: null,
    },
  }
);
const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Promo: CategoryScreen,
    Store: ProductTab,
    Wishlist: ComponentsScreen,
    Account: AccountTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ iconHome } />
          );
        }
        else if (routeName === 'Promo') {
          return (
            <Image
              source={ iconPromo } />
          );
        } 
        else if (routeName === 'Store') {
          return (
            <Image
              source={ iconStore } />
          );
        }
        else if (routeName === 'Wishlist') {
          return (
            <Image
              source={ iconWishlist } />
          );
        }
        else if (routeName === 'Account') {
          return (
            <Image
              source={ iconAccount } />
          );
        }  
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);

const StackHome = createBottomTabNavigator({
  
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Promo: {
    screen: CategoryScreen,
    navigationOptions: {
      header: null,
    },
  },
  Store: {
    screen: GridsScreen,
    navigationOptions: {
      header: null,
    },
  },
  Wishlist: {
    screen: ComponentsScreen,
    navigationOptions: {
      header: null,
    },
  },
  Account: {
    screen: CheckLogin,
    navigationOptions: {
      header: null,
    }, 
  },
},


{
  defaultNavigationOptions: ({ navigation }) => ({
    
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconSource;
      switch (routeName) {
        case 'Home':
          iconSource = iconHome;
          break;
        case 'Promo':
          iconSource = iconPromo;
          break;
        case 'Store':
          iconSource = iconStore;
          break;
        case 'Wishlist':
          iconSource = iconWishlist;
          break;
        case 'Account':
          iconSource = iconAccount;
          break;
        default:
          iconSource = iconComponents;
      }
      return (
        <View style={styles.tabBarItemContainer}>
          <Image
            resizeMode="contain"
            source={iconSource}
            style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
          />
        </View>
      );
      
    },
  }),
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    tabBarVisible: true,
    animationEnabled: true,
    // showLabel: false,
    showLabel: true,
    style: {
      backgroundColor: colors.white,
      borderTopWidth: 1,
      borderTopColor: '#d6d6d6',
    },
    labelStyle: {
      color: '#2B2B2B',
      marginBottom: 5,
    },
  },
});

// export default MainApp;
export default createAppContainer(MainApp);