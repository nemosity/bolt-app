import { StyleSheet } from 'react-native';
import { heading } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor: 'white',
    flex: 1,
  },
  option: {
    // margin: 20,
    borderRadius: 15,
    // backgroundColor: '#eee',
    overflow: 'hidden',
  },
  heading: {
    ...heading,
    padding: 25,
  },
  optionHeading: {
    ...heading,
    fontSize: 15,
    // paddingTop: 5,
    paddingLeft: 20,
  },
});
