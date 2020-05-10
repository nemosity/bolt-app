import React, { Component } from 'react';

import { Text, View, StatusBar, Image, TouchableHighlight } from 'react-native';

import Separator from '../../../../common/components/Separator';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from '../../../../actions/authActions';

import styles from './styles';

class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image
          source={{ uri: `${this.props.image}`, cache: 'default' }}
          style={styles.photo}
        />
        <Text style={styles.heading}>{this.props.name}</Text>
        <Text style={styles.subtitle}>View and edit profile</Text>
        <Text style={styles.text}>Refer a friend</Text>
        <Separator />
        <Text style={styles.text}>Settings</Text>
        <Separator />
        <Text style={styles.text}>Help & support</Text>
        <Separator />
        <Text style={styles.text}>Give us feedback</Text>
        <Separator />
        <TouchableHighlight onPress={() => this.props.logout()}>
          <Text style={styles.text}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
  image: state.auth.user.image,
});

export default connect(mapStateToProps, { logout })(ProfileScreen);
