import { StyleSheet } from 'react-native';
import {
  heading,
  backgroundColor,
  primaryColor,
  secondaryColor,
  text,
} from '../../../../styles/common';

export default StyleSheet.create({
  input: {
    ...text,
    width: 60,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  label: {
    ...heading,
    fontSize: 15,
    paddingLeft: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    //backgroundColor: primaryColor,
    width: 50,
    height: 50,
    borderRadius: 360,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: primaryColor,
    borderWidth: 2,
  },
  buttonText: {
    ...text,
    color: primaryColor,
    fontSize: 25,
    textAlign: 'center',
  },
});
