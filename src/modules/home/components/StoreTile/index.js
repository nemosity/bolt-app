import React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const StoreTile = (props) => (
  <View style={styles.container}>
    <TouchableHighlight
      underlayColor="none"
      onPress={() => props.onPressStore(props.id)}>
      <View style={styles.row}>
        <Text style={styles.header}>{props.name}</Text>
        <Text style={styles.text}>{props.location}</Text>
        <Text style={[styles.text, { color: '#7d7' }]}>Open now</Text>
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: `${props.image}`, cache: 'default' }}
            style={styles.photo}
          />
        </View>
      </View>
    </TouchableHighlight>
  </View>
);

StoreTile.propTypes = {
  onPressStore: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StoreTile;
