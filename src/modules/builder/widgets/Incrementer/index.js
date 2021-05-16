import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const increment = (value, maxValue = 10) => {
  const currentVal = parseInt(value, 10) || 0;
  return currentVal + 1 > maxValue ? maxValue : currentVal + 1;
};

const decrement = (value, minValue = 0) => {
  const currentVal = parseInt(value, 10) || 1;
  return currentVal - 1 < minValue ? minValue : currentVal - 1;
};

const Incrementer = props => {
  if (!props.value) {
    props.onChange(props.defaultValue || props.minValue || 1);
  }
  const decrementDisabled = props.value === (props.minValue || 1);
  const incrementDisabled = props.value === (props.maxValue || 10);
  const disabledStyle = {
    opacity: 0.2,
  };
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, decrementDisabled && disabledStyle]}
          disabled={decrementDisabled}
          onPress={() => props.onChange(decrement(props.value))}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{props.value}</Text>
        <TouchableOpacity
          style={[styles.button, incrementDisabled && disabledStyle]}
          disabled={incrementDisabled}
          onPress={() => props.onChange(increment(props.value))}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {props.error && <Text>{props.error}</Text>}
    </View>
  );
};

export default Incrementer;
