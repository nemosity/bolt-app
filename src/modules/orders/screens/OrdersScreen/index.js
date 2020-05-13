import React from 'react';
import { ScrollView, Text } from 'react-native';
import RecentOrders from '../../components/RecentOrders';
import styles from './styles';
import { StatefulDynamicForm } from '@nemosity/react-formulate';
import widgets from '../../../builder/widgets';

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

const schemaTwo = [
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
    id: 'size',
    widget: 'Radio',
    values: [
      {
        label: 'S (4oz)',
        value: 'small',
      },
      {
        label: 'M (6oz)',
        value: 'medium',
      },
      {
        label: 'L (8oz)',
        value: 'large',
      },
    ],
    label: 'Size',
    properties: {
      prices: {
        medium: '0.5',
        large: '1',
      },
    },
  },
  {
    id: 'strength',
    widget: 'Radio',
    values: [
      {
        label: 'Single',
        value: 'single',
      },
      {
        label: 'Double',
        value: 'double',
      },
      {
        label: 'Triple',
        value: 'triple',
      },
      {
        label: 'Decaf',
        value: 'decaf',
      },
      {
        label: '1/2 Strength',
        value: 'half',
      },
    ],
    label: 'Strength',
    properties: {
      prices: {
        double: '0.5',
        triple: '0.5',
        decaf: '0.5',
      },
    },
  },
  {
    id: 'milk',
    widget: 'Radio',
    values: [
      {
        label: 'Full',
        value: 'full',
      },
      {
        label: 'Trim',
        value: 'trim',
      },
      {
        label: 'Almond',
        value: 'almond',
      },
      {
        label: 'Soy',
        value: 'soy',
      },
      {
        label: 'Coconut',
        value: 'coconut',
      },
    ],
    label: 'Milk',
    properties: {
      prices: {
        almond: '1',
        soy: '1',
        coconut: '1',
      },
    },
  },
  {
    id: 'notes',
    widget: 'Input',
    placeholder: 'E.g. extra hot',
    label: 'Note',
  },
];
const OrdersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>RECENT ORDERS</Text>
      <RecentOrders />
      <StatefulDynamicForm
        widgets={widgets}
        schema={schemaTwo}
        onSubmit={() => {}}
      />
    </ScrollView>
  );
};

export default OrdersScreen;
