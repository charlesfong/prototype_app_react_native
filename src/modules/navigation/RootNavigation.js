/* eslint-disable no-unused-vars */
import React from 'react';
import { Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationActions, createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation';
import Button from '../../komponen/Button';
import NvBack from '../../komponen/NvBack';
import MainTabNavigator from './MainTabNavigator';
import DynamicTabNavigator from './DynamicTabNavigator';
import ProductTabNavigator from './ProductTabNavigator';
import LoginScreen from '../auth/LoginScreen';
import CheckLogin from '../auth/CheckLogin';
import HomeScreen from '../home/HomeView';
import ProfileScreen from '../profile/Profile';
import SelectCountry from '../selectCountry/SelectCountry';
import GridsScreen from '../grids/GridsViewContainer';
import GalleryScreen from '../gallery/GalleryViewContainer';
import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';

import { colors, fonts } from '../../styles';

import ProductDetailScreen from '../product/ProductDetails';
import CartScreen from '../product/Cart';

const headerBackground = require('../../../assets/images/bgwhite.jpg');

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
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
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        header: null,
      },
    },
    // Home: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    
    // CheckLogin: {
    //   screen: CheckLogin,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    // Grids: {
    //   screen: ProductTabNavigator,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    
    // Profile: {
    //   screen: ProfileScreen,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    // CheckLogin: {
    //   screen: CheckLogin,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
  },
);


export default createAppContainer(stackNavigator);
