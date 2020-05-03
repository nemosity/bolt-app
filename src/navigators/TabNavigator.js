import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import HomeScreen from '../modules/home/containers/HomeScreen';
import OrdersScreen from '../modules/orders/containers/OrdersScreen';
import ProfileScreen from '../modules/profile/containers/ProfileScreen';

import { primaryColor } from '../styles/common';

export const TabBar = TabNavigator(
  {
    HOME: {
      screen: HomeScreen,
    },
    ORDERS: {
      screen: OrdersScreen,
    },
    PROFILE: {
      screen: ProfileScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: primaryColor,
      labelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      style: {
        backgroundColor: 'white',
        paddingBottom: 15,
      },
    },
  },
);

const TabBarWithHelpers = ({ dispatch, nav }) => (
  <TabBar navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

TabBarWithHelpers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.tabNav,
});

export default connect(mapStateToProps)(TabBarWithHelpers);
