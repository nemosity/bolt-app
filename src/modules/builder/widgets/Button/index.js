import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = () => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => {}}
    underlayColor={'#fff'}>
    <Text style={styles.buttonText}>Add to order</Text>
  </TouchableHighlight>
);

export default Button;
