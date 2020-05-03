import { StyleSheet } from 'react-native';
import { text, primaryColor } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    padding: 1,
    margin: 20,
    height: 50,
    width: 160,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  disabledContainer: {
    padding: 1,
    margin: 20,
    height: 50,
    width: 160,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  text: {
    ...text,
    padding: 0,
    color: 'white',
  },
});
