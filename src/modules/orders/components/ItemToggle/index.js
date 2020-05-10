import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import styles from './styles';

/*{
  value,
  label,
  selected,
  onChange,
  customProps
}*/

const ItemToggle = ({ customProps, onChange, value, label }) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.button}
      underlayColor="none"
      onPress={() => onChange(!value)}>
      <View style={styles.row}>
        <Text style={styles.textTitle}>{label}</Text>
        {customProps.price && (
          <Text style={styles.textPrice}>
            {`from $${customProps.price.toFixed(2)}`}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  </View>
);

export default ItemToggle;
