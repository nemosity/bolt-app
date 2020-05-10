import { StyleSheet } from 'react-native';
import { heading } from '../../../../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 20,
    marginTop: 0,
    marginBottom: 0,
    overflow: 'hidden',
  },
  textTitle: {
    ...heading,
    fontSize: 15,
    fontWeight: '500',
  },
  textPrice: {
    ...heading,
    fontSize: 15,
    fontWeight: '500',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
});
