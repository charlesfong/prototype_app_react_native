/* eslint-disable no-unused-vars */
import React from 'react';
import { Image, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation';
import Button from '../../komponen/Button';
import NvBack from '../../komponen/NvBack';
// import { SearchBar } from 'react-native-elements';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-unresolved\
// import { SearchBar } from 'react-native-elements';
import MainTabNavigator from './MainTabNavigator';
import ProductTabNavigator from './ProductTabNavigator';
import GridsScreen from '../grids/GridsViewContainer';
import GalleryScreen from '../gallery/GalleryViewContainer';

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';

import { colors, fonts } from '../../styles';

import ProductDetailScreen from '../product/ProductDetails';


const headerBackground = require('../../../assets/images/bgwhite.jpg');

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null,
      },
      // navigationOptions: ({navigation}) => ({
      //   title: 'Prototypenjjn',
      //   headerTitleStyle: {
      //    color:colors.black
      //   },
      //   header:null,
      //   headerLeft:  <HeaderBackButton onPress={() => this.props.navigation.goBack()} />,
      //   headerRight: <Button onPress={() => Linking.openURL('https://google.com')} />,
      //   headerBackground: (
      //     <Image
      //       style={{ flex: 1 }}
      //       source={headerBackground}
      //       resizeMode="cover"
      //     />
      //   ),
      // }),
    },
    Profile: {
      screen: AvailableInFullVersion,
      navigationOptions: {
      },
    },
    Grids: {
      screen: ProductTabNavigator,
      navigationOptions: {
        header: null,
      },
      // navigationOptions: ({navigation}) => ({
      //   title: 'ASDADSDSADADASDASDAD',
      //   header:null,
      //   headerTitleStyle: {
      //    color:colors.black
      //   },
      //   headerLeft:  <HeaderBackButton onPress={() => this.props.navigation.goBack()} />,
      //   // headerRight: <Button onPress={() => Linking.openURL('https://google.com')} />,
      //   headerBackground: (
      //     <Image
      //       style={{ flex: 1 }}
      //       source={headerBackground}
      //       resizeMode="cover"
      //     />
      //   ),
      // }),
    },
    ProductDetail: {
      screen: ProductDetailScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  // {
  //   initialRouteName: "Grids"
  // },
  // {
  //   defaultNavigationOptions: ({navigation}) => ({
  //     titleStyle: {
  //       fontFamily: fonts.primaryLight,
  //     },
  //     header: null,
  //     headerStyle: {
  //       backgroundColor: colors.primary,
  //       borderBottomWidth: 0,
  //     },
  //     headerBackground: (
  //       <Image
  //         style={{ flex: 1 }}
  //         source={headerBackground}
  //         // resizeMode="cover"
  //         width='100%'
  //         height='100%'
  //       />
  //     ),
  //     headerTitleStyle: {
  //       color: colors.white,
  //       fontFamily: fonts.primaryRegular,
  //     },
  //     headerTintColor: '#222222',
  //   }),
  // },
);

export default createAppContainer(stackNavigator);
