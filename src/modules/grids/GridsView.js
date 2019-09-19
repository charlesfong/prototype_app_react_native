import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Button,
} from 'react-native';
import { Toast } from 'native-base';
import axios from 'axios';
import { HeaderBackButton } from 'react-navigation';
import NumberFormat from 'react-number-format';
// import { Actions } from 'react-native-router-flux';
import ProductDetail from '../product/ProductDetails';
import { colors, fonts } from '../../styles';
import Header from '../../komponen/Header';
import { RadioGroup, GridRow } from '../../components';
import Buttons from '../product/Button';
import Product from '../product/ProductDetail1';

export default class GridsScreen extends React.Component {

  // static navigationOptions = ({navigation}) => ({
  //   navigation:{ navigation },
  //   title: 'Settings',
  //   headerLeft:  <HeaderBackButton onPress={() => this.props.navigation.goBack()} />
  // })

  // static navigationOptions = {
  //   header: <Header handleClick={() => this.props.navigation.goBack()} />,
  // }
  
  state = { products: [], categories: [] };
    
    componentWillMount() {
        axios.get('https://wakimart.com/id/api/fetchNewProduct').then(
            response => this.setState({ products: response.data.data , categories:response.data.categories})
            
        );
        // this.props.screenProps.setTitle('Dashboard');
    }

    componentDidMount() {
      this.props.navigation.setParams({
        appBar: {
            title: 'Clientes'
        }
      })
    }
  
  

  _getRenderItemFunction = () =>
    [this.renderRowPrototype, this.renderRowOne, this.renderRowThree,this.renderRowTwo ][
      this.props.tabIndex
    ];
  
  _openArticle = (asd) => {
    this.props.navigation.navigate('ProductDetail', {
      data_ne: asd,
    });
  };

  _openProductDetail = () => {
    // this.state.products.map(article => 
    //   <ProductDetail key={article.id} productne={article} />
    // );
    // this.props.navigation.navigate({
    //   routeName: 'ProductDetail',
    //   params: { ...article },
    // });
    this.props.navigation.navigate('Product', {
      itemId: 86,
    });
  };

  renderProducts() {
      return this.state.products.map(product => 
        <ProductDetail key={product.id} productne={product} />
      );
  }

  renderRowPrototype = () => {
    const cellViews = this.state.products.map(item => (
      <TouchableOpacity key={item.id} style={styles.itemThreeContainer} onPress={() => this._openArticle(item)}>
        <View style={styles.itemThreeSubContainer}>
          <Image source={{ uri: `https://wakimart.com/id/sources/product_images/${(item.code).toLowerCase()}/${item.image.substring(2, item.image.length-2)}` }} style={styles.itemThreeImage} />
          <View style={styles.itemThreeContent}>
            <Text style={styles.itemThreeBrand}>{item.code}</Text>
            <View>
              <Text style={styles.itemThreeTitle}>{item.name}</Text>
              {/* <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                {item.description}
              </Text> */}
            </View>
            <View style={styles.itemThreeMetaContainer}>
              {item.code && (
                <View
                  style={[
                    // styles.badge,
                    // (item.code).includes("WMA") && { backgroundColor: colors.green },
                    (item.comingsoon).includes("0") && { backgroundColor: colors.green },
                  ]}
                >
                  <Text
                    style={{ fontSize: 10, color: colors.white }}
                    styleName="bright"
                  >
                    {item.comingsoon === '1'? "Pre Order": null }
                  </Text>
                </View>
              )}
              {/* <Text style={styles.itemThreePrice}>Rp. {(item.product_prices.member.substring(0, item.product_prices.member.length-3)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')}</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.itemThreeHr} />
      </TouchableOpacity>
    ));
    return (
      <View style={styles.itemThreeRow}>
        {cellViews}
      </View>
      
    );
  };

  renderRowOne = rowData => {
    const cellViews = rowData.item.map(item => (
      <TouchableOpacity key={item.id} onPress={() => this._openArticle(item)}>
        <View style={styles.itemOneContainer}>
          <View style={styles.itemOneImageContainer}>
            <Image style={styles.itemOneImage} source={{ uri: item.image }} />
          </View>
          <View style={styles.itemOneContent}>
            <Text style={styles.itemOneTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={styles.itemOneSubTitle}
              styleName="collapsible"
              numberOfLines={3}
            >
              {item.subtitle}
            </Text>
            <Text style={styles.itemOnePrice} numberOfLines={1}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ));
    return (
      <View key={rowData.item[0].id} style={styles.itemOneRow}>
        {cellViews}
      </View>
    );
  };

  renderRowTwo = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemTwoContainer}
      onPress={() => this._openArticle(item)}
    >
      <View style={styles.itemTwoContent}>
        <Image style={styles.itemTwoImage} source={{ uri: item.image }} />
        <View style={styles.itemTwoOverlay} />
        <Text style={styles.itemTwoTitle}>{item.title}</Text>
        <Text style={styles.itemTwoSubTitle}>{item.subtitle}</Text>
        <Text style={styles.itemTwoPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  renderRowThree = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemThreeContainer}
      onPress={() => this._openArticle(item)}
    >
      <View style={styles.itemThreeSubContainer}>
        <Image source={{ uri: item.image }} style={styles.itemThreeImage} />
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>{item.brand}</Text>
          <View>
            <Text style={styles.itemThreeTitle}>{item.title}</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.subtitle}
            </Text>
          </View>
          <View style={styles.itemThreeMetaContainer}>
            {item.badge && (
              <View
                style={[
                  styles.badge,
                  item.badge === 'NEW' && { backgroundColor: colors.green },
                ]}
              >
                <Text
                  style={{ fontSize: 10, color: colors.white }}
                  styleName="bright"
                >
                  {item.badge}
                </Text>
              </View>
            )}
            <Text style={styles.itemThreePrice}>{item.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemThreeHr} />
    </TouchableOpacity>
  );



  render() {
    
    const groupedData =
      this.props.tabIndex === 0
        ? GridRow.groupByRows(this.props.data, 2)
        : this.props.data;
        // console.warn(this.props.data);
    return (
      
      <View style={styles.container}>
        <Header textHeader='Ini Grids' />
        <View>
          <Button onPress={() => this.props.navigation.goBack()} title="Go back from this HomeScreen" />
          <Image
            style={{ flex: 1 }}
            // source={headerBackground}
            resizeMode="cover"
          />
          {/* <Text style={textStyle}>{props.textHeader}</Text> */}
        </View>
        <View style={{ height: 50 }}>
          <RadioGroup
            selectedIndex={this.props.tabIndex}
            items={this.props.tabs}
            onChange={this.props.setTabIndex}
            underline
          />
        </View>
        <FlatList
          keyExtractor={item =>
            item.id
              ? `${this.props.tabIndex}-${item.id}`
              : `${item[0] && item[0].id}`
          }
          onEndReached={this.onScrollHandler}
          onEndThreshold={0}
          style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
          data={groupedData}
          renderItem={this._getRenderItemFunction()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
});
