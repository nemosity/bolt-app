import { Navigation } from 'react-native-navigation';

export function registerScreens(store, Provider) {
  Navigation.registerComponentWithRedux('Home', () => require('./Home/Home').default, Provider, store);
  Navigation.registerComponentWithRedux('Initializing', () => require('./Initializing/Initializing').default, Provider, store);
  Navigation.registerComponentWithRedux('SignIn', () => require('./Auth/LoginScreen').default, Provider, store);
  Navigation.registerComponentWithRedux('SignUp', () => require('./Auth/SignUp').default, Provider, store);
  Navigation.registerComponentWithRedux('Screen2', () => require('./Store/Screen2').default, Provider, store);
}