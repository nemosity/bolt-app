import { StyleSheet } from 'react-native';
import { blockShadow, text } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 145,
  },
  orderContainer: {
    ...blockShadow,
  },
  order: {
    borderRadius: 8,
    backgroundColor: 'black',
    marginLeft: 15,
    marginTop: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  lastChild: {
    marginRight: 15,
  },
  photo: {
    width: 165,
    height: 120,
    flex: 1,
    alignSelf: 'center',
    opacity: 0.75,
  },
  orderText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
    backgroundColor: 'transparent',
  },
  text: {
    ...text,
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 15,
    backgroundColor: 'transparent',
  },
});
