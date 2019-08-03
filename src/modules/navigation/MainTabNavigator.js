/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';


import HomeScreen from '../home/HomeViewContainer';
// import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import CategoryScreen from '../category/CategoryView';
import ComponentsScreen from '../components/ComponentsViewContainer';
import LoginScreen from '../auth/LoginScreen';
import ProductDetailScreen from '../product/ProductDetails';
// import SignIn from '../../components/pages/SignInPage/index';

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
const StackHome = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      
      header: (
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={hederBackground} />
          <Text style={styles.headerCaption}>Category</Text>
        </View>
      ),
    },
  },
  Grids: {
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
  
  Components: {
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
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: (
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={hederBackground} />
          <Text style={styles.headerCaption}>dsfaasf</Text>
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

// This does the trick
// StackHome.navigationOptions = ({ navigation }) => {
//   let tabBarVisible;
//   if (navigation.state.routes.length > 1) {
//     navigation.state.routes.map(route => {
//       if (route.routeName === "Comentarios") {
//         tabBarVisible = false;
//       } else {
//         tabBarVisible = true;
//       }
//     });
//   }

//   return {
//     tabBarVisible
//   };
// };

export default StackHome;

