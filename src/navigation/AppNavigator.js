import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../modules/login/containers/LoginScreen';

import HomeScreen from '../modules/home/screens/HomeScreen';
import StoreScreen from '../modules/store/screens/StoreScreen';
import OrdersScreen from '../modules/orders/screens/OrdersScreen';
import ProfileScreen from '../modules/profile/screens/ProfileScreen';
import ConfirmOrderScreen from '../modules/confirm/screens/ConfirmOrderScreen';

import { primaryColor } from '../styles/common';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      options={{
        headerTintColor: 'white',
        headerShown: true,
        headerTransparent: true,
        title: null,
        headerBackTitle: 'Back',
      }}
      name="StoreDetail"
      component={StoreScreen}
    />
    <Stack.Screen name="Confirm" component={ConfirmOrderScreen} />
  </Stack.Navigator>
);

const Orders = () => (
  <Stack.Navigator>
    <Stack.Screen name="Orders" component={OrdersScreen} />
  </Stack.Navigator>
);

const Profile = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {auth.token ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: primaryColor,
            labelStyle: {
              fontSize: 14,
              fontWeight: '600',
            },
            style: {
              backgroundColor: 'white',
              paddingBottom: 40,
            },
            showIcon: false,
          }}>
          <Tab.Screen name="HOME" component={Home} />
          <Tab.Screen name="ORDERS" component={Orders} />
          <Tab.Screen name="PROFILE" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
