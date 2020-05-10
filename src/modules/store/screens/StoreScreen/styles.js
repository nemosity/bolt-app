import { StyleSheet } from 'react-native';
import { heading, blockShadow } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    backgroundColor: 'white',
    flex: 1,
  },
  storeHero: {
    backgroundColor: 'black',
  },
  heroTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    backgroundColor: 'transparent',
  },
  heroTopRight: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
  },
  heroText: {
    ...heading,
    color: '#fff',
    paddingBottom: 10,
    fontSize: 35,
    fontWeight: '700',
    backgroundColor: 'transparent',
    marginTop: 20,
    marginLeft: 20,
  },
  heroSubText: {
    ...heading,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginBottom: 20,
  },
  item: {
    height: 120,
    width: 120,
    borderRadius: 5,
    margin: 20,
    padding: 10,
    backgroundColor: '#DD7573',
  },
  heading: {
    ...heading,
    marginTop: 20,
    marginLeft: 20,
  },
  storeImage: {
    height: 400,
    width: '100%',
    alignSelf: 'center',
    opacity: 0.7,
    marginBottom: -112,
  },
  logo: {
    width: 150,
    height: 200,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 50,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#DD7573',
    borderWidth: 2,
    paddingLeft: 15,
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginTop: 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#DD7573',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7573',
    alignSelf: 'center',
  },
  loader: {
    marginTop: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10,
  },
  buyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    ...blockShadow,
  },
  buyButtonLeft: {
    flexDirection: 'column',
  },
  buyItemText: {
    ...heading,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'transparent',
    marginLeft: 20,
  },
  buyPriceText: {
    ...heading,
    fontSize: 25,
    fontWeight: '600',
    backgroundColor: 'transparent',
    marginLeft: 20,
  },
});