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
    borderTopWidth: 0,
    borderColor: '#ECECEC',
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

      
        

      <ListItem
       
            title="Akun"
            linearGradientProps={{
              colors: ['#048c4c', '#82bf26'],
            }}
            
            ViewComponent={LinearGradient}
            titleStyle={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}
            rightIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: 'transparent',
                marginRight: -1.5,
              }}
              icon={{
                type: 'material',
                name: 'place',
                color: 'white',
              }}
            />}
          />
          

        {/* <Header textHeader='Profile' /> */}
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                // uri: avatar,
              }}
            />
          </View>
          <View style={{width:"60%",}}>
            <Text style={{ 
                fontSize: 20,
                fontWeight: 'bold', }}>{this.state.profileData.name}</Text>
            <Text
              style={{
                color: 'gray',
              }}>{this.state.profileData.code}
            </Text>
          </View>
        </View>

        
        
        <View>
        <InfoText text="Akun Saya"/>
          <ListItem
            hideChevron
            title="Kartu Virtual Member"
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{ backgroundColor: '#FFADF2' }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />
          <ListItem
            // chevron
            title="Voucher Saya"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Terakhir Dilihat"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Informasi Akun"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />


          <ListItem
            title="Pusat Bantuan"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{ backgroundColor: '#A4C8F0' }}
                icon={{
                  type: 'ionicon',
                  name: 'md-information-circle',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Pengaturan"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{ backgroundColor: '#C6C7C6' }}
                icon={{
                  type: 'entypo',
                  name: 'light-bulb',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Tentang Kami"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />
          
          <ListItem
            title="Keluar"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={(
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            )}
            rightIcon={<Chevron />}
          />

        </View>
      </ScrollView>
    )
  }
}

export default Profile;
