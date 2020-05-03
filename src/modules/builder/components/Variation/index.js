import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Variation = (props) => (
  <TouchableHighlight
    onPress={() =>
      props.selectVariation(props.variation._id, props.optionID, props.itemID)
    }
    style={props.selected ? styles.selectedContainer : styles.container}>
    <View style={props.selected ? styles.selectedContainer : styles.container}>
      <Text style={props.selected ? styles.selectedText : styles.text}>
        {props.variation.name}
      </Text>
      {props.variation.price !== 0 && props.selected ? (
        <View style={styles.priceContainer}>
          <Text
            style={[
              props.selected ? styles.selectedText : styles.text,
              styles.price,
            ]}>{`$${props.variation.price}`}</Text>
        </View>
      ) : null}
    </View>
  </TouchableHighlight>
);

Variation.propTypes = {
  variation: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  optionID: PropTypes.string.isRequired,
  itemID: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  selectVariation: PropTypes.func.isRequired,
};

export default Variation;
