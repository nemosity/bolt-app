/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigators/AppNavigator';
import store from './src/store';

declare var global: { HermesInternal: null | {} };

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
