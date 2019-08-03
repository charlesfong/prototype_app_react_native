import React from 'react';
import { Text, Image, View, Linking,
    StyleSheet,
    Platform,
    FlatList,
    TouchableOpacity,
    Dimensions,
    AsyncStorage, } from 'react-native';
import { Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import SearchBar from 'react-native-search-box'
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';
import Imagez from 'react-native-scalable-image';
import Card from './Card';
import CardSection from './CardSection';
import Navbar from './component/Navbar';
// import Button from './Button';
import { colors, fonts } from '../../styles';
// eslint-disable-next-line react/prefer-stateless-function
export default class ProductDetailScreen extends React.Component {

  state = { isicart: [] };

  addToCart() {
    const product = this.state.isicart;
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

  render() {
    const left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => this.props.navigation.goBack()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    const right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => this.addToCart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    const { navigation } = this.props;
    // eslint-disable-next-line camelcase
    const data_ne = navigation.getParam('data_ne');
    const img= data_ne.image.substring(2, data_ne.image.length-2);
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    console.log(data_ne.image[0]);
    console.warn(img);
    const {
              thumbnailStyle,
              thumbnailContainerStyle
          } = styles;
    
    return (
      
      <Card>
        
        <Navbar left={left} right={right} />
        {/* <CardSection> */}
        {/* <Text>{data_ne.name}</Text> */}
        {/* <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle}
            source={{ uri: `https://wakimart.com/my/sources/product_images/${(data_ne.code).toLowerCase()}/${data_ne.image_soldout}` }}
          />
        </View> */}
        <Slideshow 
          dataSource={[
            { url: `https://wakimart.com/id/sources/product_images/${(data_ne.code).toLowerCase()}/${data_ne.image.substring(2, data_ne.image.length-2)}` }
          ]}
        />
        {/* </CardSection> */}
        <CardSection>
          {/* <Text>{data_ne.name}{"\n"}{"\n"}Rp. {data_ne.product_prices.member}</Text> */}
          <Text style={styles.itemThreeTitle}>
            {data_ne.name}{"\n"}{"\n"}
            <Text style={styles.itemThreePrice}>
            Rp. {(data_ne.product_prices.member.substring(0, data_ne.product_prices.member.length-3)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')}
            </Text>
          </Text>
        </CardSection>
        <CardSection>
          <Text style={styles.itemThreeTitle}>
            Deskripsi Produk{"\n"}
            <Text style={styles.itemThreeSubtitle}>
              {data_ne.description}
            </Text>
            {/* <HTML html={data_ne.description} /> */}
          </Text>
          <Button onPress={() => this.addToCart()} transparent>
            <Icon name='ios-cart' />
          </Button>
        </CardSection>
        <CardSection>
          <Text>
            <Text style={styles.itemThreeTitle}>
              Informasi Produk
            </Text>
            <Image
              source={
                { uri: `https://wakimart.com/id/sources/product_images/howto/wme20002c/wme20002c_howto` }
              }
              style={styles.itemInformationProduct}
            />
          </Text>
          
          {/* <Image source={{ url: `https://wakimart.com/id/sources/product_images/howto/wme20002c/wme20002c_howto` }} /> */}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    thumbnailStyle: {
        height: 100,
        width: 100
    },
    headerTextStyle: {
        
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
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
        margin:10,
        flexWrap: "wrap",
      },
      itemThreeSubtitle: {
        fontFamily: fonts.primaryRegular,
        fontSize: 14,
        // color: '#a4a4a4',
        margin:15,
      },
      itemThreeMetaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      itemThreePrice: {
        fontFamily: fonts.primaryRegular,
        fontSize: 14,
        color: '#ff0000',
        // textAlign: 'left',
        alignSelf: 'stretch',
        margin:15,
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
      itemInformationProduct: {
        marginTop:10,
        height: Math.round(Dimensions.get('window').width * 9 / 16),
        width: Dimensions.get('window').width,
      },
};

// export default ProductDetail;
