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
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
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
    // defaultNavigationOptions: {
      // header: null,
    // },
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
    Product: GridsScreen ,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
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
    Store: ProductTab,
    Akun: AccountTab,
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ iconHome }
              style={{ width: 20, height: 20, }} />
          );
        } else {
          return (
            <Image
              source={ iconComponents }
              style={{ width: 20, height: 20 }} />
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
      header: (
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={hederBackground} />
          <Text style={styles.headerCaption}>Home</Text>
        </View>
      ),
    },
  },
  Store: {
    screen: GridsScreen,
    navigationOptions: {
      header: (
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={hederBackground} />
          <Text style={styles.headerCaption}>Grids</Text>
        </View>
      ),
    },
  },
  Wishlist: {
    screen: ComponentsScreen,
    navigationOptions: {
      header: (
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={hederBackground} />
          <Text style={styles.headerCaption}>Components</Text>
        </View>
      ),
    },
  },
  Akun: {
    screen: CheckLogin,
    navigationOptions: {
      header: (
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={hederBackground} />
          <Text style={styles.headerCaption}>Login</Text>
        </View>
      ),
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
        case 'Calendar':
          iconSource = iconCalendar;
          break;
        case 'Grids':
          iconSource = iconGrids;
          break;
        case 'Category':
          iconSource = iconPages;
          break;
        case 'Components':
          iconSource = iconComponents;
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
      borderTopWidth: 0.5,
      borderTopColor: '#d6d6d6',
    },
    labelStyle: {
      color: colors.grey,
    },
  },
});

// export default MainApp;
export default createAppContainer(MainApp);
