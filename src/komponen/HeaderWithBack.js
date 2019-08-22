import React from 'react';
import { View, Text, Image } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Button from '../modules/product/Button';

const headerBackground = require('../../assets/images/bgwhite.jpg');

const styles = {
 textStyle: {
  fontSize: 20
 },
 headerStyle: {
  backgroundColor: '#F8F8F8',
  justifyContent: 'center',
  alignItems: 'center',
        height: 60,
        marginTop: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
 }
};

const Header = (props) => {
    const { textStyle, headerStyle } = styles;
    return (
      <View style={headerStyle}>
        {/* <Button onPress={() => props.navigation.navigate.GoBack()} /> */}
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
        <Text style={textStyle}>{props.textHeader}</Text>
      </View>
    );
};

export default Header;