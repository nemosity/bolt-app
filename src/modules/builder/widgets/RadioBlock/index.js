import React from 'react';
import { View, Text, TouchableHighlight, LayoutAnimation } from 'react-native';
import styles from './styles';
/*{
  index,
  value,
  label,
  selected,
  onPress,
  customProps
}*/
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

const RadioBlock = (props) => {
  const ROW_LENGTH = 3;
  const mappedOptions = [[]];
  props.values.map((value, index) => {
    const row = Math.floor(index / ROW_LENGTH);
    const rowIndex = index % ROW_LENGTH;
    if (rowIndex === 0) {
      mappedOptions.push([]);
    }
    mappedOptions[row].push(value);
  });
  return (
    <View style={styles.containerOuter}>
      <Text style={styles.label}>{props.label}</Text>
      {mappedOptions.map((row) => (
        <View style={styles.variations}>
          {row.map((option, index) => (
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
      ))}
    </View>
  );
};

export default RadioBlock;
