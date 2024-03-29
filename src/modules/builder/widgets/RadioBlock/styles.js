import { StyleSheet, Dimensions } from 'react-native';
import {
  text,
  heading,
  primaryColor,
  secondaryColor,
  blockShadow,
} from '../../../../styles/common';

const ITEMS_PER_ROW = 4;
const ITEMS_ROW_PADDING = 20;

export default StyleSheet.create({
  containerOuter: {
    paddingTop: 10,
  },
  variations: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: ITEMS_ROW_PADDING / 2,
  },
  layoutContainer: {
    width:
      Dimensions.get('window').width / ITEMS_PER_ROW -
      ITEMS_ROW_PADDING / ITEMS_PER_ROW,
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
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
    borderColor: primaryColor,
    backgroundColor: primaryColor,
  },
  text: {
    ...text,
    padding: 0,
    opacity: 1,
    textAlign: 'center',
  },
  selectedText: {
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
  label: {
    ...heading,
    fontSize: 15,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  error: {
    ...text,
    fontSize: 15,
    paddingBottom: 5,
    paddingLeft: 20,
    color: primaryColor,
  },
});
