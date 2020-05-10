import { StyleSheet } from 'react-native';
import {
  heading,
  backgroundColor,
  primaryColor,
  secondaryColor,
} from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor,
  },
  heading: {
    ...heading,
    padding: 20,
    paddingBottom: 5,
  },
  input: {
    margin: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingLeft: 15,
    width: 'auto',
    height: 60,
  },
  button: {
    height: 50,
    backgroundColor: secondaryColor,
    alignSelf: 'stretch',
    marginTop: 60,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: secondaryColor,
    width: 250,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
