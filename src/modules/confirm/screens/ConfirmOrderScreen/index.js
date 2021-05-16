import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import { itemSelector, itemTotalSelector } from '../../../../selectors';

class ConfirmOrderScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
      </ScrollView>
    );
  }
}

ConfirmOrderScreen.propTypes = {
  item: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  itemTotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  item: itemSelector(state),
  itemTotal: itemTotalSelector(state),
});

export default connect(mapStateToProps)(ConfirmOrderScreen);
