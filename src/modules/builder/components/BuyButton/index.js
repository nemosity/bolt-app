import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BuyButton = props => (
  <TouchableOpacity
    onPress={() => props.onPress()}
    style={props.disabled ? styles.disabledContainer : styles.container}>
    <Text style={styles.text}>Checkout</Text>
  </TouchableOpacity>
);

BuyButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default BuyButton;
