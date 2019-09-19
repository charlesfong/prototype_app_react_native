import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Toast } from 'native-base';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import { colors } from '../../styles';

class ProductList extends Component {
    state = { products: [], isicart:[] };
    
    componentWillMount() {
        axios.get('https://wakimart.com/id/api/fetchProduct').then(
            response => this.setState({ products: response.data.data })
            
        );
    }

    _keyExtractor = (item) => item.id;

    _renderProducts = () => [this.state.products];

    addToCart() {
      const product = this.state.isicart;
      product['id'] = this.state.selectedColor;
      product['quantity'] = this.state.quantity;
      AsyncStorage.getItem("CART", (err, res) => {
        if (!res) AsyncStorage.setItem("CART", JSON.stringify([product]));
        else {
          const items = JSON.parse(res);
          items.push(product);
          AsyncStorage.setItem("CART", JSON.stringify(items));
        }
        Toast.show({
          text: 'Product added to your cart !',
          position: 'bottom',
          type: 'success',
          buttonText: 'Dismiss',
          duration: 3000
        });
      });
    }

    renderProducts() {
        return this.state.products.map(product => 
          <ProductDetail key={product.id} productne={product} />
        );
    }

    

    render() {
        console.log(this.state.products);
        return (
        //   <ScrollView>
        //     { this.renderProducts() }
        //   </ScrollView>
          <FlatList
            keyExtractor={this._keyExtractor}
            style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
            data={this.state.products}
            renderItem={this.state.products}
          />
        );
    }
}

export default ProductList;
