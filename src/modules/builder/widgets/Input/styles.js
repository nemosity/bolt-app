import { StyleSheet } from 'react-native';
import {
  heading,
  backgroundColor,
  primaryColor,
  secondaryColor,
} from '../../../../styles/common';

export default StyleSheet.create({
  input: {
    margin: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: 'auto',
    height: 60,
  },
  label: {
    ...heading,
    fontSize: 15,
    paddingLeft: 20,
  },
});
