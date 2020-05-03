import React, { useEffect, useState } from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  StatusBar,
  LayoutAnimation,
} from 'react-native';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { login, autoLogin } from '../../../../actions/authActions';

import styles, { underlayColor } from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticating = useSelector((state) => state.auth.isAuthenticating);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(autoLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let errorCtrl = <View />;

  if (error && error.errorMessage) {
    errorCtrl = (
      <Text style={styles.error}>
        That email and password combination did not work
      </Text>
    );
  } else if (error) {
    errorCtrl = (
      <Text style={styles.error}>We experienced an unexpected issue</Text>
    );
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.statusBar}>
        <StatusBar barStyle="light-content" />
      </View> */}
      <View style={styles.items}>
        <Image
          source={require('../../../../images/logo.png')}
          style={styles.logo}
        />
        {!isAuthenticating && (
          <View>
            <TextInput
              style={[styles.input, styles.shadow]}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                dispatch(
                  login({
                    email,
                    password,
                  }),
                );
              }}
              underlayColor={underlayColor}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableHighlight>
          </View>
        )}
        {errorCtrl}
        <ActivityIndicator
          animating={isAuthenticating}
          size="large"
          style={styles.loader}
        />
      </View>
      <Text style={styles.signup}>{"Don't have an account? Sign up here"}</Text>
    </View>
  );
};

export default LoginScreen;
