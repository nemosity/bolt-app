import { StyleSheet } from 'react-native';
import {
  text,
  heading,
  primaryColor,
  secondaryColor,
  blockShadow,
} from '../../../../styles/common';

export default StyleSheet.create({
  containerOuter: {
    padding: 5,
  },
  variations: {
    //margin: 5,
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    padding: 1,
    margin: 10,
    height: 40,
    width: 80,
    borderColor: 'lightgray',
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  selectedContainer: {
    padding: 1,
    margin: 10,
    height: 40,
    width: 80,
    borderColor: primaryColor,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    ...text,
    padding: 0,
    opacity: 1,
    textAlign: 'center',
  },
  selectedText: {
    ...text,
    padding: 0,
    opacity: 1,
    color: 'white',
    textAlign: 'center',
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
  label: {
    ...heading,
    fontSize: 15,
    // paddingTop: 5,
    paddingLeft: 20,
  },
});
