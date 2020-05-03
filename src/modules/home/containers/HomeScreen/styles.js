import { StyleSheet } from 'react-native';
import { heading, backgroundColor } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor,
  },
  heading: {
    ...heading,
    fontSize: 30,
    padding: 20,
    paddingBottom: 5,
  },
  subheading: {
    ...heading,
    padding: 20,
    paddingBottom: 5,
  },
});
