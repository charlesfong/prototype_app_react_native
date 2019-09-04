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
  TouchableHightLight,
  AsyncStorage,
} from 'react-native';
// import AtoZListView from 'react-native-atoz-listview';
import { SearchBar } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation';
import firebase from 'firebase';
import axios from 'axios';
import Search from 'react-native-search-box'
import Slideshow from 'react-native-image-slider-show';
// https://github.com/react-native-vietnam/react-native-search-box
import Card from './Card';
import CardSection from './CardSection';
import CategoriesCard from './CategoriesCard';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import Header from '../../komponen/Header';

// export default function HomeScreen() {
// eslint-disable-next-line react/prefer-stateless-function

const rowHeight = 40;

export default class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return{
      // headerTitle: "Profile",
      // headerLeft:<HeaderBackButton onPress={()=>{navigation.replace('Main')}} />,
   }
  }

  state = { frontEndCms: [], products: [], categories: [] };

    // eslint-disable-next-line react/sort-comp
    

    componentWillMount() {
        axios.get('https://wakimart.com/id/api/fetchFrontendCMS').then(
            response => this.setState({ frontEndCms: response.data })   
        );
        
        axios.get('https://wakimart.com/id/api/fetchNewProduct').then(
          response => this.setState({ categories:response.data.categories }),
        );
        AsyncStorage.getItem("ALLPRODUCT", (err, res) => {
          if (!res)
          {
            axios.get('https://wakimart.com/id/api/fetchNewProduct').then(
              response => AsyncStorage.setItem('ALLPRODUCT', JSON.stringify(response.data.data))
            );
          }
        });
    } 

    renderRow = (item, sectionId, index) => {
      return (
        <TouchableHightLight 
          style={{ 
            height: rowHeight, 
            justifyContent: 'center', 
            alignItems: 'center'}}
        >
          <Text>{item.name}</Text>
        </TouchableHightLight>
      );
    }

    onSearch = (searchText) => {
      return new Promise((resolve, reject) => {
          console.warn(searchText);
          console.warn('Add your search function here.');
          console.warn(this.state.categories);
          resolve();
      });
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
    return (

      // https://wakimart.com/id/api/fetchFrontendCMS
      <Card>
        {/* <CardSection> */}
        {/* <Image
            style={styles.bgImage}
            source={require('../../../assets/images/bgwhite.jpg')}
            resizeMode="cover"
          /> */}
        {/* <Text style={styles.textStyle}>{this.props.textHeader}</Text> */}
        {/* </CardSection> */}
        <CardSection>
          <ImageBackground
            // source={require('../../../assets/images/background.png')}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <Search
              // eslint-disable-next-line react/no-string-refs
              ref="search_box"
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
        </CardSection>
        {/* <View style={styles.container}> */}
        <CardSection>
          <Text style={styles.textTitle}>Categories</Text>
        </CardSection>
        <CategoriesCard />
        
        
        <TouchableOpacity>
          <View style={styles.itemOneContainer}>
            <View style={styles.itemOneImageContainer}>
              {/* <Image style={styles.itemOneImage} source={{ uri: "https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg" }} /> */}
            </View>
          </View>
        </TouchableOpacity>
        
        <FlatList
          keyExtractor={item =>
            item.id
              ? `${this.props.tabIndex}-${item.id}`
              : `${item[0] && item[0].id}`
          }
          onEndReached={this.onScrollHandler}
          onEndThreshold={0}
          style={{ backgroundColor: colors.black, paddingHorizontal: 15 }}
          // data={groupedData}
          renderItem={this._getRenderItemFunction()}
        />
      {/* </View> */}
      </Card>
      
    );
  }
  
}

const styles = StyleSheet.create({
   textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // flex: 1,
   },
   sectionCategories: {
    // flex: 1,
    // marginTop: 40,
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // position: 'relative'
   },
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
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
          height: 60,
          marginTop: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
   },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    // flex: 1,
    // marginHorizontal: -20,
    // resizeMode: 'stretch', // or 'stretch',
    width: Dimensions.get('window').width,
    // height:'100%',
    height: '10%',

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
