/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';


import ProductDetailScreen from '../product/ProductDetails';
// import SignIn from '../../components/pages/SignInPage/index';
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
  ProductDetail: {
    screen: ProductDetailScreen,
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
        case 'ProductDetail':
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

export default StackHome;

