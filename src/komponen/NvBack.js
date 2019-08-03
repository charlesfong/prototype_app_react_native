import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const NvBack = ({ onPress }) => {
    const { buttonStyle, imageStyle } = styles;
    const headerBackground = require('../../assets/images/icons/arrow-back.png');

    return (
      <TouchableOpacity onPress={onPress}>
        <Image 
          style={{ imageStyle }}
          source={headerBackground}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
};

const styles = {
    imageStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fled: 1,
        // fontSize: 16,
        // fontWeight: '600',
        // paddingTop: 10,
        paddingLeft: 10,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default NvBack;
