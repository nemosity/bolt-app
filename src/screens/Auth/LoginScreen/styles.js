import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, text } from '../../../styles/common';

export const underlayColor = secondaryColor;
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    width: 250,
  },
  statusBar: {
    color: secondaryColor,
    backgroundColor: secondaryColor,
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 150,
    color: 'white',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    height: 50,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: 'white',
    //borderRadius: 10,
    borderColor: primaryColor,
    borderBottomWidth: 2,
    paddingLeft: 15,
    width: 250,
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
  loader: {
    marginTop: 30,
  },
  error: {
    color: primaryColor,
    paddingTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  signup: {
    ...text,
    color: primaryColor,
    alignSelf: 'center',
    padding: 20,
  },
});
