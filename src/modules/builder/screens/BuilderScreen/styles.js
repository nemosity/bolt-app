import { StyleSheet } from 'react-native';
import {
  heading,
  backgroundColor,
  primaryColor,
  secondaryColor,
} from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor,
    paddingTop: 100,
  },
  heading: {
    ...heading,
    fontSize: 30,
    padding: 20,
    paddingBottom: 5,
  },
  input: {
    margin: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingLeft: 15,
    width: 'auto',
    height: 60,
  },
});
