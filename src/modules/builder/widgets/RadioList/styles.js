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
    paddingLeft: 20,
    paddingBottom: 20,
  },
  variations: {
    //marginLeft: 20,
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  radioOuter: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: primaryColor,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    //marginVertical: 10,
    height: 50,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  text: {
    ...text,
    padding: 0,
    opacity: 1,
    textAlign: 'center',
  },
  priceContainer: {
    height: 20,
    width: 35,
    borderColor: secondaryColor,
    borderRadius: 5,
    borderWidth: 1,
    //alignItems: 'flex-end',
    //justifyContent: 'flex-end',
    backgroundColor: secondaryColor,
    //position: 'absolute',
    ...blockShadow,
  },
  price: {
    //flex: 1,
    //bottom: 0,
    fontSize: 12,
    color: 'white',
  },
  label: {
    ...heading,
    fontSize: 15,
    paddingBottom: 5,
  },
  error: {
    ...text,
    fontSize: 15,
    paddingBottom: 5,
    color: primaryColor,
  },
});
