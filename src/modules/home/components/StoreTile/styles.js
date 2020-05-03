import { StyleSheet } from 'react-native';
import { blockShadow, text, heading } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 20,
  },
  photoContainer: {
    position: 'absolute',
    height: 100,
    width: 150,
    right: 0,
    top: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  photo: {
    height: '100%',
  },
  header: {
    ...heading,
    fontSize: 30,
    paddingTop: 5,
  },
  text: {
    ...text,
    paddingTop: 10,
  },
  row: {
    height: 120,
  },
});
