import { StyleSheet, Dimensions } from 'react-native';
import { blockShadow, text, heading } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  photoContainer: {
    position: 'absolute',
    height: 340,
    width: Dimensions.get('screen').width - 40,
    right: 0,
    top: 0,
    ...blockShadow,
    zIndex: -1,
    backgroundColor: 'black',
    borderRadius: 13,
    marginBottom: 5,
  },
  photo: {
    height: '100%',
    borderRadius: 13,
    opacity: 0.7,
  },
  header: {
    ...heading,
    fontSize: 30,
    paddingTop: 5,
    marginLeft: 20,
    color: 'white',
    marginTop: 230,
    ...blockShadow,
  },
  text: {
    ...text,
    fontWeight: '700',
    paddingTop: 10,
    marginLeft: 20,
    color: 'white',
    ...blockShadow,
  },
  row: {
    height: 350,
  },
});
