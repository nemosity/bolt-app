import React from 'react';
import { View, Text, TouchableHighlight, LayoutAnimation } from 'react-native';
import styles from './styles';

const Option = props => (
  <TouchableHighlight
    onPress={() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      return props.onPress(props.value);
    }}
    underlayColor="white"
    style={styles.layoutContainer}>
    <View
      style={[styles.container, props.selected && styles.selectedContainer]}>
      <View style={styles.radioOuter}>
        {props.selected ? <View style={styles.radioInner} /> : null}
      </View>
      <Text style={[styles.text, props.selected && styles.selectedText]}>
        {props.label}
      </Text>
      {props.selected && props.prices && props.prices[props.value] ? (
        <View style={styles.priceContainer}>
          <Text
            style={[
              styles.text,
              props.selected && styles.selectedText,
              styles.price,
            ]}>{`$${props.prices[props.value]}`}</Text>
        </View>
      ) : null}
    </View>
  </TouchableHighlight>
);

const RadioBlock = props => (
  <View style={styles.containerOuter}>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.variations}>
      {props.values.map((option, optionIndex) => (
        <Option
          index={optionIndex}
          value={option.value}
          key={optionIndex}
          label={option.label}
          selected={props.value === option.value}
          onPress={props.onChange}
          prices={props.prices}
        />
      ))}
    </View>
    {props.error && <Text style={styles.error}>{props.error}</Text>}
  </View>
);

export default RadioBlock;
