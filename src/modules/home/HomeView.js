import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ActivityIndicator,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  FlatList,
  List,
  ListItem,
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import firebase from 'firebase';
import axios from 'axios';
import SearchBar from 'react-native-search-box'
import Slideshow from 'react-native-image-slider-show';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Header from '../../komponen/Header';

// export default function HomeScreen() {
// eslint-disable-next-line react/prefer-stateless-function
export default class HomeScreen extends React.Component {
  state = { frontEndCms: [], products: [], categories: [] };
  // static navigationOptions = {
  //   header: <Header handleClick={() => this.props.navigation.goBack()} />,
  // }
    
    componentWillMount() {
        axios.get('https://wakimart.com/id/api/fetchFrontendCMS').then(
            response => this.setState({ frontEndCms: response.data })
            
        );
        axios.get('https://wakimart.com/id/api/fetchNewProduct').then(
          response => this.setState({ products: response.data.data , categories:response.data.categories})
          
      );
        // this.props.screenProps.setTitle('Dashboard');
    }
    
    _getRenderItemFunction = () =>
    [this.renderRowOne
    ];

    renderRowOne = () => {
      const cellViews = this.state.products.map(item => (
        <TouchableOpacity key={item.id} style={styles.itemThreeContainer}>
          <View style={styles.itemThreeSubContainer}>
            {/* <Image source={{ uri: `https://wakimart.com/id/sources/product_images/${(item.code).toLowerCase()}/${item.image.substring(2, item.image.length-2)}` }} style={styles.itemThreeImage} /> */}
            <Image style={styles.itemOneImage} source={{ uri: "https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg" }} />
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
                <Text style={styles.itemThreePrice}>Rp. {(item.product_prices.member.substring(0, item.product_prices.member.length-3)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')}</Text>
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

  render() {
    // console.warn(this.state.products);
    return (
      // https://wakimart.com/id/api/fetchFrontendCMS
      <View style={styles.container}>
        
        {/* <Header textHeader='Ini Header' navigation={this.props.navigation} /> */}
        <View style={styles.headerStyle}>
          {/* <Button onPress={() => this.props.navigation.goBack()} title="Go back from this HomeScreen" /> */}
          <Image
            style={{ flex: 1 }}
            source={require('../../../assets/images/bgwhite.jpg')}
            resizeMode="cover"
          />
          <Text style={styles.textStyle}>{this.props.textHeader}</Text>
        </View>
        <ImageBackground
          // source={require('../../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <SearchBar
            onSearch={this.onSearch}
            style={{
              backgroundColor: '#00FF00',
              tintColorSearch: '#FFFF00',
              placeholderTextColor: '#FFFF00',
            }}
          />
          <Slideshow 
            dataSource={this.state.frontEndCms}
          />
        </ImageBackground>
        <TouchableOpacity>
          <View style={styles.itemOneContainer}>
            <View style={styles.itemOneImageContainer}>
              {/* <Image style={styles.itemOneImage} source={{ uri: "https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg" }} /> */}
            </View>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
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
   headerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
          height: 60,
          marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
   },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
    // resizeMode: 'stretch', // or 'stretch',
    width: '100%',
    height:'100%',

  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
