import React from 'react';
import { Text, StatusBar, ScrollView } from 'react-native';

import NearbyStores from '../../components/NearbyStores';
import styles from './styles';

export default ({ navigation }) => (
  <ScrollView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.heading}>{'Good morning,\nJoe ☀️\n'}</Text>
    <Text style={styles.subheading}>NEARBY STORES</Text>
    <NearbyStores navigation={navigation} />
  </ScrollView>
);
