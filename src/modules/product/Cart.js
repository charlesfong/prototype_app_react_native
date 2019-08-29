/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Text, Alert, AsyncStorage,View } from 'react-native';
import { Container, Content, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import Navbar from './component/Navbar';
import axios from 'axios';
// Our custom files and classes import
import Colors from './Colors';
// import Text from '../component/Text';
// import Navbar from '../component/Navbar';

export default class Cart extends Component {
  constructor(props) {
      super(props);
      this.state = {
        cartItems: [],
        data : [],
        imge : "",
        hasFetched: true
      };
  }
  
  componentWillMount() {
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) this.setState({cartItems: []});
      else 
      {
        this.setState({cartItems: JSON.parse(res)});
      }
      console.log(this.state.cartItems);
    });
    AsyncStorage.getItem("ALLPRODUCT", (err, res) => {
      let ress = JSON.parse(res);
      Object.keys(this.state.cartItems).map(x => console.log(this.state.cartItems[x]))
      // for (var i in ress) {
      //   if (item.product_id==ress[i].id)
      //   {
      //     data_ne_2=ress[i];
      //     img = `https://wakimart.com/id/sources/product_images/${(data_ne_2["code"]).toLowerCase()}/${data_ne_2["image"].substring(2, data_ne_2["image"].length-2)}`;
      //     this.setState({imge:img});
      //     console.log("zc12");
      //   }
      // }
    });
  }

  renderItems() {
    let data_ne_2 = [];   
    const items = [];
    var img = "";
    this.state.cartItems.map((item, i) => {
      AsyncStorage.getItem("ALLPRODUCT", (err, res) => {
        let ress = JSON.parse(res);
        for (var i in ress) {
          if (item.product_id==ress[i].id)
          {
            data_ne_2=ress[i];
            img = `https://wakimart.com/id/sources/product_images/${(data_ne_2["code"]).toLowerCase()}/${data_ne_2["image"].substring(2, data_ne_2["image"].length-2)}`;
            this.setState({imge : img});
          }
        }
      });
      items.push(
        
        <ListItem
          key={i}
          last={this.state.cartItems['product_code'] === i+1}
          onPress={() => this.itemClicked(item.product_code)}
        >
          <Thumbnail square style={{width: 110, height: 90}} source={{uri:this.state.imge}} />
          <Body style={{paddingLeft: 10}}>
            <Text style={{fontSize: 18}}>
              {item.quantity > 1 ? item.quantity+"x " : null}
              {/* {data_ne_2.name} */}
              
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{item.price}</Text>
            {/* <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>Color: {item.color}</Text> */}
            {/* <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>Size: {item.size}</Text> */}
          </Body>
          <Right>
            <Button style={{marginLeft: -25}} transparent onPress={() => this.removeItemPressed(item)}>
              <Icon size={30} style={{fontSize: 30, color: '#95a5a6'}} name='ios-remove-circle-outline' />
            </Button>
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if ( this.state.hasFetched ) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    let counter = 0;
    counter++;
    console.log(counter);
    const left = (
      <Left style={{flex:1}}>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="ios-arrow-back" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} title="MY CART" />
        {this.state.cartItems.length <=0 ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="ios-cart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
            <Text style={{color: '#95a5a6'}}>Your cart is empty</Text>
          </View>
          ): (
            <Content style={{paddingRight: 10}}>
              <List>
                {this.renderItems()}
              </List>
              <Grid style={{marginTop: 20, marginBottom: 10}}>
                <Col style={{paddingLeft: 10,paddingRight: 5}}>
                  <Button onPress={() => this.checkout()} style={{backgroundColor: Colors.navbarBackgroundColor}} block iconLeft>
                    <Icon name='ios-card' />
                    <Text style={{color: '#fdfdfd'}}>Checkout</Text>
                  </Button>
                </Col>
                <Col style={{paddingLeft: 5, paddingRight: 10}}>
                  <Button onPress={() => this.removeAllPressed()} style={{borderWidth: 1, borderColor: Colors.navbarBackgroundColor}} block iconRight transparent>
                    <Text style={{color: Colors.navbarBackgroundColor}}>Emtpy Cart</Text>
                    <Icon style={{color: Colors.navbarBackgroundColor}} name='ios-trash-outline' />
                  </Button>
                </Col>
              </Grid>
              
            </Content>
            
)}  
      </Container>
      
    );
  }

  // eslint-disable-next-line react/sort-comp
  removeItemPressed(item) {
    Alert.alert(
      'Remove '+item.title,
      'Are you sure you want this item from your cart ?',
      [
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.removeItem(item)},
      ]
    )
  }
  stopRendering = () =>
  {
    this.setState({hasFetched: true});
  }
  removeItem(itemToRemove) {
    let items = [];
    this.state.cartItems.map((item) => {
      if(JSON.stringify(item) !== JSON.stringify(itemToRemove) )
        items.push(item);
    });
    this.setState({cartItems: items});
    AsyncStorage.setItem("CART",JSON.stringify(items));
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

const styles={
  title: {
    fontFamily: 'Roboto',
    fontWeight: '100'
  }
};

const items = [
  {id: 1, quantity:1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
  {id: 2, quantity:3, title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
  {id: 10, quantity:1, title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
];
