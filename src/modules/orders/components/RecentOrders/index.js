import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

//import shortid from 'shortid';

import styles from './styles';

export default () => {
  const orders = [
    'Mojo\nFlat White',
    'Home\nLong Black',
    'Starbucks\nFrappa',
    'Bolt\nMachiatto',
  ];
  const ordersList = orders.map((order, i) => (
    <View style={styles.orderContainer} key={i}>
      <View style={[styles.order, i === orders.length - 1 && styles.lastChild]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            cache: 'default',
          }}
          style={styles.photo}
        />
        <View style={styles.orderText}>
          <Text style={styles.text}>{order}</Text>
        </View>
      </View>
    </View>
  ));

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {ordersList}
    </ScrollView>
  );
};
