import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = props => (
  <View style={styles.containerOuter}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      value={props.value}
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChange}
      multiline={true}
      numberOfLines={4}
    />
    {props.error && <Text>{props.error}</Text>}
  </View>
);

export default Input;
