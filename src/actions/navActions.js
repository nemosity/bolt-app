// Navigation action creators - common for these to be dispatched in other
// action creator flows as normally navigation state changes occur last

import {
  LOGOUT,
  NAV_HOME_SCREEN,
  NAV_STORE_SCREEN,
  NAV_CONFIRM_ORDER_SCREEN,
} from './';

export const logout = () => ({
  type: LOGOUT,
});

export const navHomeScreen = () => ({
  type: NAV_HOME_SCREEN,
});

export const navStoreScreen = () => ({
  type: NAV_STORE_SCREEN,
});

export const navConfirmOrderScreen = () => ({
  type: NAV_CONFIRM_ORDER_SCREEN,
});
