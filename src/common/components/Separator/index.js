import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  separator: {
    width: width - 40,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignSelf: 'center',
  },
});

export default () => <View style={styles.separator} />;
