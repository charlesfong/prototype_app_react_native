import React, {Component} from 'react';
import { Image, View, StyleSheet, Text, AsyncStorage } from 'react-native';
import {BottomTabBar, createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../home/HomeViewContainer';
// import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import CategoryScreen from '../category/CategoryView';
import ComponentsScreen from '../components/ComponentsViewContainer';
import LoginScreen from '../auth/LoginScreen';

const TABS = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    Category: {
        screen: CategoryScreen,
        navigationOptions: {
            header: null,
        }
    },
    Grids: {
        screen: GridsScreen,
        navigationOptions: {
            header: null,
        }
    },
    Components: {
        screen: ComponentsScreen,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
    },
};

export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    _tabNavigator = () => {
        let tabs = {};
        if (this.props.navigation.state.params.tabs) {

            this.props.navigation.state.params.tabs.forEach(e => {
                tabs[e] = TABS[e];
            })

        } else {
            const {Page1, Page2} = TABS;
            tabs = {Page1, Page2};
            Page1.navigationOptions.tabBarLabel = 'P1';
        }
        return createBottomTabNavigator(tabs, {
            tabBarComponent: TABS,
            // tabBarOptions: {
            //     activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
            // }
        });
    }

    render() {
        const Tabs = this._tabNavigator();
        return (
          <Tabs />
        );
    }
}