import React, { Component } from 'react';

import { View, ActivityIndicator, LayoutAnimation } from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { storesRequest, selectStore } from '../../../../actions/storeActions';

import styles from './styles';
import StoreTile from '../StoreTile';
import Separator from '../../../../common/components/Separator';

class NearbyStores extends Component {
  constructor(props) {
    super(props);
    this.onPressStore = this.onPressStore.bind(this);
  }
  componentDidMount() {
    if (!this.props.stores) {
      this.props.storesRequest();
    }
  }

  UNSAFE_componentWillReceiveProps() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  onPressStore = id => {
    this.props.selectStore(id);
    this.props.navigation.navigate('StoreDetail');
  };

  render() {
    if (this.props.stores) {
      return (
        <View style={styles.container}>
          {this.props.stores.map(store => (
            <View key={store._id}>
              <StoreTile
                id={store._id}
                onPressStore={this.onPressStore}
                name={store.name}
                location={store.location}
                image={store.image}
              />
              {/* <Separator /> */}
            </View>
          ))}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.props.isFetching}
          size="large"
          style={styles.loader}
        />
      </View>
    );
  }
}

NearbyStores.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
  storesRequest: PropTypes.func.isRequired,
  selectStore: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

NearbyStores.defaultProps = {
  stores: null,
  isFetching: false,
};

const mapStateToProps = state => ({
  isFetching: state?.stores?.isFetching,
  stores: state?.stores?.stores,
});

export default connect(mapStateToProps, { storesRequest, selectStore })(
  NearbyStores,
);
