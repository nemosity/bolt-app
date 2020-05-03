import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import RecentOrders from '../../components/RecentOrders';
import styles from './styles';
import { StatefulDynamicForm } from '@nemosity/react-formulate';
import RadioButton from '../../components/RadioButton';

const widgets = {
  Input: (props) => (
    <View>
      <Text>{props.label}</Text>
      <TextInput
        value={props.value}
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
      />
      {props.error && <Text>{props.error}</Text>}
    </View>
  ),
  Header: Text,
  Button: () => (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {}}
      underlayColor={'#fff'}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableHighlight>
  ),
  Radio: RadioButton,
};

const schema = [
  {
    id: 'question1',
    widget: 'Input',
    placeholder: 'E.g. small dent to left bumper',
    label: 'What was damaged?',
    validation: {
      required: true,
    },
  },
  {
    id: 'question2',
    widget: 'Input',
    placeholder: 'E.g. small dent to left bumper',
    label: 'What was damaged?',
    validation: {
      required: true,
    },
    showIf: {
      id: 'question1',
      value: 'Hi',
    },
  },
  {
    id: 'product.type',
    widget: 'Radio',
    placeholder: '',
    values: [
      {
        label: 'Flat White',
        value: 'fw',
      },
      {
        label: 'Long Black',
        value: 'lb',
      },
    ],
    label: 'Select your drink',
  },
  {
    id: 'product.items',
    widget: 'Radio',
    placeholder: '',
    values: [
      {
        label: 'Trim',
        value: 'trim',
      },
      {
        label: 'Regular',
        value: 'regular',
      },
      {
        label: 'Coconut',
        value: 'coconut',
      },
    ],
    label: 'Milk',
    properties: {
      prices: {
        coconut: '1',
      },
    },
    showIf: {
      id: 'product.type',
      value: 'fw',
    },
  },
];

class OrdersScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
    },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.selectBuyButton = this.selectBuyButton.bind(this);
  }

  selectBuyButton() {
    const { storeID, itemID, variations } = this.props;
    this.props.prepareForPayment(storeID, itemID, variations);
  }

  // TODO Refactor components

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>RECENT ORDERS</Text>
        <RecentOrders />
        <StatefulDynamicForm widgets={widgets} schema={schema} />
      </View>
    );
  }
}

OrdersScreen.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(OrdersScreen);
