// React native and others libraries imports
import React, { Component } from 'react';
import { Text, Alert, AsyncStorage,View,FlatList, TouchableOpacity, image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import Navbar from './component/Navbar';
import MainTabNavigator from '../navigation/MainTabNavigator';
import axios from 'axios';
import Colors from './Colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import BaseIcon from '../profile/Icon';
import { CheckBox } from 'react-native-elements';


// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)
console.log(getStatusBarHeight());
 
// will be 0 on Android, because You pass true to skipAndroid
console.log(getStatusBarHeight(true));

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = getStatusBarHeight();

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '100'
  },
  button: {
    backgroundColor: '#ffffff',
  },
}) 

export default class Cart extends Component {
  constructor(props) {
      super(props);
      this.state = {
        cartItems: [],
        productsCart: [],
        hasFetched:true,
        interest: [],
      };
  }
  state = {
    checked: false,
  };

  // shouldComponentUpdate() {
  //   return this.state.hasFetched;
  // }

  async componentDidMount() {
    let lengthOfArray = this.state.cartItems.length-1;
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) this.setState({cartItems: []});
      else 
      {
        this.setState({cartItems: []});
        this.setState({cartItems: JSON.parse(res)});
        var url = "https://wakimart.co.id/api/fetchCartProduct/";
        for(var i in this.state.cartItems){
          url += this.state.cartItems[i]['product_id'];
          if(lengthOfArray != i){
            url += "-";
          }
        }
        url=url.substring(0, url.length-1)
        console.log("res :" +res);
        axios.get(url).then(
            response => this.setState({ productsCart: (response.data.data) }, () => {
              // this.state.productsCart = this.state.productsCart.filter(function() { return true; });
              // console.log(this.state.productsCart.filter());
            })
        );
      }
    });
  }

  // componentWillUnmount() {
  //   let lengthOfArray = this.state.cartItems.length-1;
  //   AsyncStorage.getItem("CART", (err, res) => {
  //     if (!res) this.setState({cartItems: []});
  //     else 
  //     {
  //       this.setState({cartItems: JSON.parse(res)});
  //       var url = "https://wakimart.co.id/api/fetchCartProduct/";
  //       for(var i in this.state.cartItems){
  //         url += this.state.cartItems[i]['product_id'];
  //         if(lengthOfArray != i){
  //           url += "-";
  //         }
  //       }
  //       url=url.substring(0, url.length-1)
  //       console.log(url);
  //       axios.get(url).then(
  //           response => this.setState({ productsCart: (response.data.data) }, () => {
  //             // this.state.productsCart = this.state.productsCart.filter(function() { return true; });
  //             // console.log(this.state.productsCart.filter());
  //           })
  //       );
  //     }
  //   });
  // }

  checkqty = (qty) => {
    console.log(qty);
  }

  minqty = (item) => {
    
  }

  plusqty = (item) => {
    var found = array1.find(function(element) {
      return element > 10;
    });
  }

  renderRowPrototype = () => {
    if(this.state.productsCart!=null&&this.state.productsCart!="")
    {
      let arr3 = [];

      this.state.productsCart.forEach((itm, i) => {
        arr3.push(Object.assign({}, itm, this.state.cartItems[i]));
      });

      // console.log(arr3);
      const cellViews = arr3.map(item => (
      <TouchableOpacity key={item.id}>
        <View style={{
            width: '95%',
            height: 140,
            alignSelf: 'center',
            flexDirection: "row",
            marginBottom: 10,
            borderRadius: 10,
            flex: 1,
            elevation: 5,
            shadowOpacity: 0.2,
            position: 'relative',
            backgroundColor: '#fafafa'
          }}>
          <View style={{width: '10%', justifyContent: 'center',}}>
              <CheckBox
                size={20}
                checked={true}
                color="#24cf8c"
                containerStyle={{
                  margin: 0,
                  padding: 0,
                }}
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <View style={{width: '30%', justifyContent: 'center',}}>
              <Thumbnail
                source={{
                  uri: `https://wakimart.com/id/sources/product_images/${(item.code).toLowerCase()}/${item.image.substring(2, item.image.length - 2)}`
                }} square
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                }} />
          </View>
          <View style={{width: '45%', alignSelf: 'center',}}>
              <Text style={{ fontSize: 10, color: 'black' }}>
                {/* {item.quantity > 1 ? item.quantity+"x " : null} */}
                {/* {data_ne_2.name} */}
                {/* {this.stop()} */}
                {item.name}
              </Text>
              <Text style={{ fontSize: 14, color: '#24cf8c', fontWeight: 'bold',marginTop:10, marginBottom: 20 }}>
                Rp. {(item.product_prices.member.substring(0, item.product_prices.member.length - 3)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')}
              </Text>
              {/* <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>Color: {item.color}</Text> */}
              {/* <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>Size: {item.size}</Text> */}
              {/* <Button icon onPress={() => this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })} >
              <Icon name='ios-remove' style={{ color: Colors.navbarBackgroundColor }} />
            </Button> */}
            <View style={{
              flexDirection: 'row', }}>
                <View style={{
                  width: '80%',
                  height: 30,
                  bottom: 0,
                  borderRadius: 20,
                  backgroundColor: '#ffffff',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <View style={{ width: '30%', }}>
                    <Button transparent onPress={() => { item.squantity > 1 ? item.quantity-- : 1 }}>
                      <BaseIcon
                        containerStyle={{
                          backgroundColor: 'transparent',
                          borderRadius: 20,
                          marginLeft: 0,
                          marginRight: 0,
                        }}
                        icon={{
                          type: 'ionicon',
                          name: 'ios-remove',
                          color: 'black',
                          size: 20,
                        }} />
                    </Button>
                  </View>
                  <View style={{ width: '40%', }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
                      <Text style={{ fontSize: 14 }}>{item.quantity}</Text>
                    </View>
                  </View>
                  <View style={{ width: '30%', }}>
                    <Button transparent onPress={() => { item.quantity++ }}>
                      <BaseIcon
                        containerStyle={{
                          backgroundColor: 'transparent',
                          borderRadius: 20,
                          marginLeft: 0,
                          marginRight: 0,
                        }}
                        icon={{
                          type: 'ionicon',
                          name: 'ios-add',
                          color: 'black',
                          size: 20,
                        }} />
                    </Button>
                  </View>
                </View>

            </View>
          </View>
          <View style={{width: '15%', justifyContent: 'center', alignItems: 'center',}}>
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Button transparent onPress={() => this.removeItemPressed(item)}>
                  <BaseIcon
                    containerStyle={{
                      backgroundColor: '#ff6969',
                      borderRadius: 5,
                      width: 30,
                      height: 30,
                      marginLeft: 0,
                      marginRight: 0,
                      elevation: 5,
                      shadowOpacity: 0.2,
                      shadowRadius: 2.22,
                    }}
                    icon={{
                      type: 'material',
                      name: 'delete-forever',
                      color: 'white',
                      size: 20,
                    }} />
                </Button>
              </View>
                <Text style={{
                  fontSize: 10,
                  color: '#ff6969',
                  fontWeight: 'bold',
                  marginTop: -5,}}>
                  Hapus
                </Text>
          </View>
        </View>
      </TouchableOpacity>
      ));
      return (
        <View>
          {cellViews}
        </View>
      );
    }
  }

  render() { 
    const { checked } = this.state;
    const left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.goBack()}>
          <Icon name="ios-arrow-back" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return(
      <Container>
      <MyStatusBar backgroundColor="#090" barStyle="light-content" />
      <View>
      <ListItem
            containerStyle={{
              height:40,
              paddingTop: 5,
              // marginTop: STATUSBAR_HEIGHT,
              // paddingTop:20,
              // marginBottom:-20,
            }}
            title="Akun"
            titleStyle={{
              color: 'black',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: -10,
              letterSpacing: 0.2,
              marginLeft: 5,
            }}
          rightIcon={
            <TouchableOpacity onPress={this.onPress}>
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
                  size: 28,
                }} />
            </TouchableOpacity>
          }
        />
        </View>
        {this.state.cartItems.length <=0 ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="ios-cart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
            <Text style={{color: '#95a5a6'}}>Your cart is empty</Text>
          </View>
          ): (
            <Content>
              <List>
                {this.renderRowPrototype()}
              </List>
              <CheckBox
                containerStyle={{ 
                  margin: 0, 
                  padding: 0,
                  elevation: 5,
                  shadowOpacity: 0.2,
                  shadowRadius: 2.22,
                }}
                checked={this.state.checked}
              />
              <Grid style={{marginTop: 20, marginBottom: 10}}>
                <Col style={{paddingLeft: 10,paddingRight: 5}}>
                  <Button onPress={() => this.checkout()} style={{backgroundColor: Colors.navbarBackgroundColor}} block iconLeft>
                    {/* <Icon name='ios-card' /> */}
                    <Text style={{color: '#fdfdfd'}}>Checkout</Text>
                  </Button>
                </Col>
                <Col style={{paddingLeft: 5, paddingRight: 10}}>
                  <Button onPress={() => this.removeAllPressed()} style={{borderWidth: 1, borderColor: Colors.navbarBackgroundColor}} block iconRight transparent>
                    <Text style={{color: Colors.navbarBackgroundColor}}>Emtpy Cart</Text>
                  </Button>
                </Col>
              </Grid>
            </Content>
    )}  
      </Container>
    );
  }

  removeItemPressed(item) {
    Alert.alert(
      'Remove '+item.name,
      'Are you sure you want this item from your cart ?',
      [
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.removeItem(item.id)},
      ]
    )
  }

  removeItem(itemToRemove) {
    let items = [];
    
    this.state.cartItems.map((item) => {
      
      if(JSON.stringify(item.product_id) !== JSON.stringify(itemToRemove) )
        items.push(item);
        // console.log(JSON.stringify(item)+" items : "+JSON.stringify(items));
      });
    console.log(items);
    this.setState({cartItems: []});
    AsyncStorage.setItem("CART",JSON.stringify(items));
    this.setState({cartItems: items});
    this.render();
    // this.setState({cartItems: items}, () => {
    //   AsyncStorage.setItem("CART",JSON.stringify(items));
    // });
    
    // this.setState({cartItems: []});
    // this.props.navigation.replace('Cart');
  }
  
  removeAllPressed() {
    Alert.alert(
      'Empty cart',
      'Are you sure you want to empty your cart ?',
      [
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.removeAll()}
      ]
    )
  }

  apiCart() {
    let lengthOfArray = this.state.cartItems.length-1;
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) this.setState({cartItems: []});
      else 
      {
        
        this.setState({cartItems: JSON.parse(res)});
        var url = "https://wakimart.co.id/api/fetchCartProduct/";
        for(var i in this.state.cartItems){
          url += this.state.cartItems[i]['product_id'];
          url += "-";
        }
        url=url.substring(0, url.length-1)
        axios.get(url).then(
            response => this.setState({ productsCart: (response.data.data) }, () => {
              this.render();
            })
        );
      }
    });
  }

  removeAll() {
    this.setState({cartItems: []})
    AsyncStorage.setItem("CART",JSON.stringify([]));
  }

  checkout() {
    Actions.checkout({cartItems: this.state.cartItems});
  }

  itemClicked(item) {
    Actions.product({product: item});
  }

}

