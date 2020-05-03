import React, { Component } from 'react';

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

import { connect } from 'react-redux';
import { login, autoLogin } from '../../../actions/authActions';

import styles, { underlayColor } from './styles';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillMount() {
    this.props.autoLogin();
  }

  componentWillReceiveProps() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    let errorCtrl = <View />;

    if (this.props.error && this.state.errorMessage) {
      errorCtrl = (
        <Text style={styles.error}>
          That email and password combination did not work
        </Text>
      );
    } else if (this.props.error) {
      errorCtrl = (
        <Text style={styles.error}>We experienced an unexpected issue</Text>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar barStyle="light-content" />
        </View>
        <View style={styles.items}>
          <Image
            source={require('../../../images/logo.png')}
            style={styles.logo}
          />
          {!this.props.isAuthenticating && (
            <View>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })}
              />
              <TouchableHighlight
                style={styles.button}
                onPress={() =>
                  this.props.login({
                    email: this.state.email,
                    password: this.state.password,
                  })
                }
                underlayColor={underlayColor}>
                <Text style={styles.buttonText}>LOG IN</Text>
              </TouchableHighlight>
            </View>
          )}
          {errorCtrl}
          <ActivityIndicator
            animating={this.props.isAuthenticating}
            size="large"
            style={styles.loader}
          />
        </View>
        <Text style={styles.signup}>
          {"Don't have an account? Sign up here"}
        </Text>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  autoLogin: PropTypes.func.isRequired,
  isAuthenticating: PropTypes.bool,
  error: PropTypes.bool,
};

LoginScreen.defaultProps = {
  isAuthenticating: false,
  error: false,
};

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => dispatch(autoLogin()),
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
