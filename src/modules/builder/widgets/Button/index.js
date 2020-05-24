import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = (props) => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => props.onClick()}
    underlayColor={'#fff'}>
    <Text style={styles.buttonText}>Add to Cart</Text>
  </TouchableHighlight>
);

export default Button;
