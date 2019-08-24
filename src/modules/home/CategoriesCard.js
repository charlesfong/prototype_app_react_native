import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements'

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    <View style={styles.userImage}>
      <Avatar
        rounded
        size="large"
        source={{
        uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
        }}
      />
    </View>
    {props.children}
  </View>
    );

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        marginTop:10,
        // padding: 5,
        // paddingleft: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
