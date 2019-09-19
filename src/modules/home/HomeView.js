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
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements'
// import AtoZListView from 'react-native-atoz-listview';
import { SearchBar } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation';
import firebase from 'firebase';
import axios from 'axios';
import Search from 'react-native-search-box'
import Slideshow from 'react-native-image-slider-show';
import LinearGradient from 'react-native-linear-gradient';
// import { Card } from "@paraboly/react-native-card";
// https://github.com/react-native-vietnam/react-native-search-box
import Card from './Card';
import CardSection from './CardSection';
import CardBestSeller from './CardBestSeller';
import CategoriesCard from './CategoriesCard';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { StatusBar } from 'react-native';
import Header from '../../komponen/Header';

// export default function HomeScreen() {
// eslint-disable-next-line react/prefer-stateless-function

// const rowHeight = 40;

export default class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return{
      header: null,
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

  state = { frontEndCms: [], products: [], categories: [] };

    componentWillMount() {
        axios.get('https://wakimart.com/id/api/fetchFrontendCMS').then(
            response => this.setState({ frontEndCms: response.data })   
        );
        
        axios.get('https://wakimart.com/id/api/fetchProduct').then(
          response => this.setState({ categories: response.data.categories })
        );
        // AsyncStorage.getItem("ALLPRODUCT", (err, res) => {
        //   if (!res)
        //   {
        //     axios.get('https://wakimart.com/id/api/fetchNewProduct').then(
        //       response => AsyncStorage.setItem('ALLPRODUCT', (response.data.data))
        //     );
        //   }
        //   else
        //   {
        //     this.setState({products: res});
        //     // console.log(this.state.products);
        //   }
        // });
        axios.get('https://wakimart.com/id/api/fetchNewProduct').then(
          response => this.setState({ products: response.data.data })
        );
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
    
    consoletes = () =>
    console.log(this.state.categories)
    ;

    
    renderCategories = () => {
      // console.log(this.state.categories);
      if(this.state.categories!=null&&this.state.categories!="")
      {
        // console.log(this.state.categories);
        const cellViews = this.state.categories.map(item => (
          <TouchableOpacity key={item.id} style={styles.itemThreeContainer}>
            {/* <View style={styles.CategorycontainerStyle}> */}
              <View style={styles.userImage}>
                <Avatar
                  rounded
                  height={70}
                  width={70}
                  source={{
                  // uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
                  uri: `https://wakimart.com/id/sources/category/${(item.name)}/icon/${(item.icon)}`,
                  }}
                />
              </View>
            {/* </View> */}
          </TouchableOpacity>
        ));
        return (
          <View style={styles.CategorycontainerStyle}>
            {cellViews}
          </View>
        );
      }
    };
    renderCategories2 = () => {
      // console.log(this.state.categories);
      if(this.state.categories!=null&&this.state.categories!="")
      {
        // console.log(this.state.categories);
        const cellViews = this.state.categories.map(item => (
          <TouchableOpacity key={item.id} style={styles.itemThreeContainer}>
            {/* <View style={styles.CategorycontainerStyle}> */}
              <View style={styles.userImage}>
                <Avatar
                  rounded
                  height={70}
                  width={70}
                  source={{
                  // uri: 'https://wakimart.com/id/sources/category/Kecantikan/icon/kecantikan.jpg',
                  uri: `https://wakimart.com/id/sources/category/${(item.name)}/icon/${(item.icon)}`,
                  }}
                />
              </View>
            {/* </View> */}
          </TouchableOpacity>
        ));
        return (
          <View style={styles.CategorycontainerStyle}>
            {cellViews}
          </View>
        );
      }
    };

    renderBestSeller = () => {
      if(this.state.products!=null&&this.state.products!="")
      {
        const cellViews = this.state.products.map(item => (
          <TouchableOpacity key={item.id}>
            <View style={styles.itemOneContainer}>
              <View style={styles.itemOneImageContainer}>
              <Image source={{ uri: `https://wakimart.com/id/sources/product_images/${(item.code).toLowerCase()}/${item.image.substring(2, item.image.length-2)}` }} style={styles.itemOneImage} />
              </View>
              <View style={styles.itemOneContent}>
                <Text style={styles.itemOneTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                {/* <Text
                  style={styles.itemOneSubTitle}
                  styleName="collapsible"
                  numberOfLines={3}
                >
                  {item.name}
                </Text> */}
                <Text style={styles.itemOnePrice}>
                Rp. {(item.product_prices.member.substring(0, item.product_prices.member.length-3)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')}
                </Text>
                <Text style={styles.itemOneSold} >
                  0 Terjual
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ));
        return (
          <View style={styles.itemOneRow}>
            {cellViews}
          </View>
        );
      }
    };

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <ScrollView>
        <StatusBar translucent={true} backgroundColor={'transparent'} />

        <View style={styles.containerStyle}>
            {/* <CardSection> */}
            {/* <Image
                style={styles.bgImage}
                source={require('../../../assets/images/bgwhite.jpg')}
                resizeMode="cover"
              /> */}
            {/* <Text style={styles.textStyle}>{this.props.textHeader}</Text> */}
            {/* </CardSection> */}
            <View
            >
              <Search
                ref="search_box"
                onSearch={this.onSearch}
                backgroundColor={"#090"}
                contentWidth={Dimensions.get('window').width-40}
                middleWidth={Dimensions.get('window').width-40}
              />
              <Slideshow 
                dataSource={this.state.frontEndCms}
                indicatorSize={0}
                arrowSize={0}
                containerStyle={styles.sliderStyle}
              />
            </View>
            <CardSection>
              <Text style={styles.textTitle}>Categories</Text>
            </CardSection>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.renderCategories()}
            </ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.renderCategories2()}
            </ScrollView>
            <CardSection>
              <Text style={styles.textTitle}>Best Seller</Text>
            </CardSection>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.renderBestSeller()}
            </ScrollView>
            <CardSection>
              <Text style={styles.textTitle}>Promo Terbaru</Text>
            </CardSection>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {/* {this.renderBestSeller()} */}
            </ScrollView>     
        </View>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
   textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    flex: 1,
    marginLeft: 17,
    color: '#2d2d2d',
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
    marginLeft:15,
    // flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
    // marginRight: 20,
    borderRadius: 20,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemOneImageContainer: {
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 170,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 10,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    color: '#0a0',
    marginTop: 10,
    fontSize: 10,
  },
  itemOneSold: {
    fontFamily: fonts.primaryRegular,
    textAlign: 'right',
    fontSize: 7,
    marginRight:10,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    paddingLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
   headerStyle: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // marginTop: 80,
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
    // width: Dimensions.get('window').width,
    width: '100%',
    // height:'1%',
    // height: '10%',
    // resizeMode: "contain",

  },
  sliderStyle: {
    width: '100%',
    resizeMode: "stretch",
    // height:'1%',
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
  CategorycontainerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    flex: 2,
    marginLeft: 15,
    marginBottom: 10,
  },
  containerStyle: {
    // marginTop: 50
  },
});
