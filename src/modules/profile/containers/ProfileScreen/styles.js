import { StyleSheet } from 'react-native';
import { secondaryColor, heading } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: undefined,
    height: undefined,
    padding: 20,
  },
  heading: {
    ...heading,
    fontSize: 40,
  },
  subtitle: {
    ...heading,
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 80,
  },
  text: {
    ...heading,
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 40,
    position: 'absolute',
    top: 25,
    right: 30,
    zIndex: 50,
  },
});
