import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation';
import PropTypes from 'prop-types'
import MainTabNavigator from '../navigation/MainTabNavigator'
import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'
import Header from '../../komponen/HeaderWithBack';
import LinearGradient from 'react-native-linear-gradient';
import constants from './constants'
import { StatusBar } from 'react-native';


const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  userImage: {
    marginRight: 20,
  },
  listItemContainer: {
    height: 75,
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderColor: '#707070',
  },
  titleStyle: {
    color: '#2B2B2B',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleStyle: {
    fontSize: 11,
    color: '#505B6F',
  },
})


class Profile extends Component {
  

  static navigationOptions = ({navigation}) => {
    return{
      header: null,/* <Header textHeader='Profile' /> */
      headerTitle: "Akun",
      headerTitleStyle: {
        color: 'white'
      },
      headerRight:<HeaderBackButton onPress={()=>{navigation.replace('Main')}} />,
      headerBackground: (
        <LinearGradient
          colors={['#048c4c', '#82bf26']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
   }
  }

  state = {
    pushNotifications: true,
    profileData: [],
  }

  componentDidMount() {
    AsyncStorage.getItem('user', (error, result) => {
      if (result) {
          this.setState({ profileData: JSON.parse(result)})
      }
    });
  }

  logout = () => {
    AsyncStorage.removeItem('user');
    this.props.navigation.replace('CheckLogin');
  }



  onPressOptions = () => {
    this.props.navigation.navigate('options')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
    console.warn(this.state.pushNotifications);
  }

  render() {
    // const {name} = this.state.profileData
    
    return (
      
      <ScrollView style={styles.scroll}>

      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />

      <ListItem
            containerStyle={{
              height:80,
              paddingTop:20,
              marginBottom:-20,
            }}
            title="Akun"
            linearGradientProps={{
              colors: ['#048c4c', '#82bf26'],
              useAngle: true, angle: 45,
            }}
            ViewComponent={LinearGradient}
            titleStyle={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: -10,
            }}
            rightIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: 'transparent',
                marginRight: 1,
                marginBottom: -10,
              }}
              icon={{
                type: 'material',
                name: 'settings',
                color: 'white',
                size: 30,
              }}
            />}
          />

      <ListItem
          containerStyle={{ height: 120, }}
            linearGradientProps={{
              colors: ['#048c4c', '#82bf26'],
              useAngle: true, angle: 45,
            }}
            ViewComponent={LinearGradient}
            leftIcon={
            <Avatar
                containerStyle={{
                  marginLeft: 5,
                  marginRight: 10,
                }}
              rounded
              size="large"
              source={{
                // uri: avatar,
              }}
            />}
            title={this.state.profileData.name}
            titleStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 5,
              letterSpacing: 0.5,
            }}
            subtitle={
              <View style={{ width: "80%", }}>
                <View style={{flexDirection: "row", }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 11,
                      marginBottom: 5,
                    }}>{this.state.profileData.code} Verified Member
                </Text>
                  <BaseIcon
                    containerStyle={{
                      backgroundColor: '#transparent',
                      margin: -10,
                      marginLeft: -5,
                    }}
                    icon={{
                      type: 'material',
                      name: 'verified-user',
                      color: 'white',
                      size: 15,
                    }}
                  />
                </View>
                <View style={{flexDirection: "column", }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10,
                      marginBottom: 5,
                    }}>Bergabung sejak Juli 2019
                  </Text>
                </View>
              </View>
            }
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 15,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: 'white',
                  size: 40,
                }}
              />
            )}
          />

        <ListItem
          containerStyle={{ 
            height: 120,
            borderBottomWidth: 8,
            borderColor: '#e2e2e2', 
          }} 
            title="Pesanan Saya"
            titleStyle={{
              color: '#2B2B2B',
              marginLeft: 4,
              marginTop: -15,
              fontSize: 18,
              fontWeight: 'bold',
            }}
            subtitle={
              <View style={{ width: "80%", }}>
                <View style={{flexDirection: "row", }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 11,
                      marginBottom: 5,
                    }}>{this.state.profileData.code} Verified Member
                </Text>
                  <BaseIcon
                    containerStyle={{
                      backgroundColor: '#transparent',
                      margin: -10,
                      marginLeft: -5,
                    }}
                    icon={{
                      type: 'material',
                      name: 'verified-user',
                      color: 'white',
                      size: 15,
                    }}
                  />
                </View>
                <View style={{flexDirection: "column", }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10,
                      marginBottom: 5,
                    }}>Bergabung sejak Juli 2019
                  </Text>
                </View>
              </View>
            }
          />   

        <View>
          <Text
            style={{
              color: '#2B2B2B',
              marginLeft: 20,
              marginTop: 15,
              fontSize: 18,
              fontWeight: 'bold',
            }}>Akun Saya
          </Text>
          <ListItem
            title="Kartu Virtual Member"
            titleStyle={styles.titleStyle}
            subtitle="Lihat kartu visual keanggotaan WAKimart."
            subtitleStyle={styles.subtitleStyle}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'card-membership',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />


          <ListItem
            title="Voucher Saya"
            titleStyle={styles.titleStyle}
            subtitle="Lihat semua voucher spesial yang Anda miliki."
            subtitleStyle={styles.subtitleStyle}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material-community',
                  name: 'ticket',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />


          <ListItem
            title="Terakhir Dilihat"
            titleStyle={styles.titleStyle}
            subtitle="Cek kembali produk yang terakhir dilihat."
            subtitleStyle={styles.subtitleStyle}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'card-travel',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />


          <ListItem
            title="Informasi Akun"
            titleStyle={styles.titleStyle}
            subtitle="Atur detail data dan informasi akun Anda."
            subtitleStyle={styles.subtitleStyle}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'person-outline',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />


          <ListItem
            title="Pusat Bantuan"
            titleStyle={styles.titleStyle}
            subtitle="Lihat solusi terbaik atau hubungi kami."
            subtitleStyle={styles.subtitleStyle}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'help-outline',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />


          <ListItem
            title="Pengaturan"
            titleStyle={styles.titleStyle}
            subtitle="Atur dan ubah pengaturan aplikasi."
            subtitleStyle={styles.subtitleStyle}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'settings',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />
          

          <ListItem
            title="Tentang Kami"
            titleStyle={styles.titleStyle}
            subtitle="Mengetahui lebih dalam tentang WAKimart."
            subtitleStyle={styles.subtitleStyle}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'info-outline',
                  color: '#505B6F',
                }}
              />
            )}
            rightIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginRight: 1,
                }}
                icon={{
                  type: 'ionicon',
                  name: 'ios-arrow-forward',
                  color: '#505B6F',
                  size: 40,
                }}
              />
            )}
          />
          

          <ListItem
            title="Keluar"
            titleStyle={styles.titleStyle}
            onPress={() => this.logout()}
            containerStyle={{
              height: 75,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0.5,
              borderColor: '#707070',}}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#transparent',
                  marginLeft: 15,
                }}
                icon={{
                  type: 'material',
                  name: 'power-settings-new',
                  color: '#505B6F',
                }}
              />
            )}
          />


        </View>
      </ScrollView>
    )
  }
}

export default Profile;