import { StyleSheet } from 'react-native';
import { secondaryColor } from '../../../../styles/common';

export default StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: secondaryColor,
    alignSelf: 'center',
    margin: 30,
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
