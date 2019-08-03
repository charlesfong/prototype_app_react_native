import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

export default class GoogleButton extends Component {
  onGoogleButtonClick = () => {
    console.warn('Google button clicked'); // eslint-disable-line
  };

  render() {
    if (this.props.special) {
      return (
        <Button
        //   onPress={this.onGoogleButtonClick}
          iconLeft
          bordered
          activeOpacity={0.5}
          style={{
        //   width: ( 37) / 100,
        //     height:  14,
            // borderColor: mainThemeColor,
            // marginLeft: width / 13,
        }}
        >
          <Icon name="logo-google" />
          <Text
            uppercase={false}
            style={{
            // fontSize: GLOBAL.totalSize(2.22), flex: 1, textAlign: 'center', fontWeight: '500', color: mainThemeColor, paddingLeft: width / 50,
          }}
          >Google
          </Text>
        </Button>
      );
    }
    return (
      <Button
        bordered
        activeOpacity={0.5}
        onPress={this.onGoogleButtonClick}
        style={{
          alignSelf: 'center', justifyContent: 'center',
        }}
        
      >
        <Text
          uppercase={false}
        //   style={{ color: mainThemeColor, fontWeight: '600', fontSize: GLOBAL.totalSize(2.22) }}
        >
          {/* {language.google} */}Login
        </Text>
      </Button>
    );
  }
}

GoogleButton.propTypes = {
  special: PropTypes.bool,
};

GoogleButton.defaultProps = {
  special: false,
};
