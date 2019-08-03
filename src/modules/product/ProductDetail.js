import React from 'react';
import { Text, Image, View, Linking,
    StyleSheet,
    Platform,
    FlatList,
    TouchableOpacity,
    Dimensions, } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { colors, fonts } from '../../styles';
// import console = require('console');

// eslint-disable-next-line react/prefer-stateless-function
export default class ProductDetailScreen extends React.Component {
  render() {
    const { props } = this.props;
    console.log(props);
    const {
              thumbnailStyle,
              thumbnailContainerStyle
          } = styles;
    return (
      <Card>
        <CardSection>
          {/* <Text>{props.productne.name}</Text> */}
          <View style={thumbnailContainerStyle}>
            <Image 
              style={thumbnailStyle}
              // source={{ uri: `https://wakimart.com/id/sources/product_images/${(props.productne.code).toLowerCase()}/${props.productne.image_soldout}` }}
            />
          </View>
        </CardSection>
        <CardSection>
                
          <Button onPress={() => Linking.openURL('https://google.com')} />
        </CardSection>
      </Card>
    );
  }
}

// const ProductDetail = (props) => {
//     const {
//         thumbnailStyle,
//         thumbnailContainerStyle
//     } = styles;
//     return (
//       <Card>
//         <CardSection>
//           <Text>{props.productne.name}</Text>
//           <View style={thumbnailContainerStyle}>
//             <Image 
//               style={thumbnailStyle}
//               source={{ uri: `https://wakimart.com/id/sources/product_images/${(props.productne.code).toLowerCase()}/${props.productne.image_soldout}` }}
//             />
//           </View>
//         </CardSection>
//         <CardSection>
                
//           <Button onPress={() => Linking.openURL('https://google.com')} />
//         </CardSection>
//       </Card>
//     );
// };

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
};

// export default ProductDetail;
