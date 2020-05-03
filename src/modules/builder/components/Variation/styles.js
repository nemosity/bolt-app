import { StyleSheet } from 'react-native';
import { text, primaryColor, secondaryColor, blockShadow } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    padding: 1,
    margin: 5,
    height: 40,
    width: 80,
    borderColor: 'lightgray',
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  selectedContainer: {
    padding: 1,
    margin: 5,
    height: 40,
    width: 80,
    borderColor: primaryColor,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  text: {
    ...text,
    padding: 0,
    opacity: 1,
  },
  selectedText: {
    ...text,
    padding: 0,
    opacity: 1,
    color: 'white',
  },
  priceContainer: {
    height: 20,
    width: 35,
    borderColor: secondaryColor,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondaryColor,
    position: 'absolute',
    top: -11,
    right: -8,
    ...blockShadow,
  },
  price: {
    flex: 0,
    bottom: 0,
    fontSize: 12,
  },
});
