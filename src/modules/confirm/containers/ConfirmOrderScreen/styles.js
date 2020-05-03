import { StyleSheet } from 'react-native';
import { heading } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    ...heading,
    padding: 25,
  },
});
