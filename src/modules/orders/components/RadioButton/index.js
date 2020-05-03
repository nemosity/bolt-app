import React from 'react';
import { View, Text, TouchableHighlight, LayoutAnimation } from 'react-native';
import styles from './styles';
/* {
  index,
  value,
  label,
  selected,
  onPress,
  customProps
}
//
*/
const Option = (props) => (
  <TouchableHighlight
    onPress={() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      return props.onPress(props.value);
    }}
    style={props.selected ? styles.selectedContainer : styles.container}>
    <View style={props.selected ? styles.selectedContainer : styles.container}>
      <Text style={props.selected ? styles.selectedText : styles.text}>
        {props.label}
      </Text>
      {props.selected && props.prices && props.prices[props.value] ? (
        <View style={styles.priceContainer}>
          <Text
            style={[
              props.selected ? styles.selectedText : styles.text,
              styles.price,
            ]}>{`$${props.prices[props.value]}`}</Text>
        </View>
      ) : null}
    </View>
  </TouchableHighlight>
);

const RadioButton = (props) => (
  <View style={styles.containerOuter}>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.variations}>
      {props.values.map((option, index) => (
        <Option
          index={index}
          value={option.value}
          key={index}
          label={option.label}
          selected={props.value === option.value}
          onPress={props.onChange}
          prices={props.prices}
        />
      ))}
    </View>
  </View>
);

export default RadioButton;
