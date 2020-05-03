import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BuyButton = props => (
  <TouchableHighlight
    onPress={() => props.onPress()}
    style={props.disabled ? styles.disabledContainer : styles.container}
  >
    <Text style={styles.text}>Place Order</Text>
  </TouchableHighlight>
);

BuyButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default BuyButton;
