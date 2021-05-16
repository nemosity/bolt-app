import React from 'react';

import { View, TouchableHighlight, Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const MenuItem = props => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.button}
      underlayColor="none"
      onPress={() => props.onPressItem(props.id)}>
      <View style={styles.row}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textPrice}>
          {`from $${props.price.toFixed(2)}`}
        </Text>
      </View>
    </TouchableHighlight>
  </View>
);

MenuItem.propTypes = {
  onPressItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MenuItem;
