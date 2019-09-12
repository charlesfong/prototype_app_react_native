import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card } from "@paraboly/react-native-card"

const Cards = (props) => (  
  
  <ScrollView>
    <Card
      iconDisable
      title="Title"
      content="Main Content"
      bottomRightText="30"
      onPress={() => {}}
      style={styles.CardStyle}
    >
        {props.children}
    </Card>
  </ScrollView>
  
);

const styles = {
    containerStyle: {
        // borderWidth: 1,
        // borderRadius: 2,
        // // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#00ff00',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        marginTop: 50
    },
    CardStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 10,
    },
};

export default Cards;
