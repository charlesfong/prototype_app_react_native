import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Button,
    AsyncStorage,
} from 'react-native';
import { Text } from '../../components/StyledText';

export default class SelectCountry extends React.Component{
    state = { selectedCountry: '-' }

    _checkCountry = () => {
        AsyncStorage.getItem('selectedCountry', (error, result) => {
            if (result) {
                // this.props.navigation.replace('Profile');
            }
            else
            {

            }
        });
    }

    render(){
        return(
            <View style={StyleSheet.bodyContainer}>
                <Text>Select Country</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,  
        padding: 26,  
        backgroundColor: "#fff000",  
        justifyContent: "flex-start" 
    },
});