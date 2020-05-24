import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { StatefulDynamicForm } from '@nemosity/react-formulate';
import widgets from '../../../builder/widgets';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../actions/cartActions';
import { itemSelector } from '../../../../selectors';

const BuilderScreen = () => {
  const { options, title, _id } = useSelector(itemSelector);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>{title}</Text>
        <StatefulDynamicForm
          widgets={widgets}
          schema={options}
          onSubmit={(data) => {
            dispatch(addItem({ _id, options: data }));
          }}
        />
      </View>
    </ScrollView>
  );
};

export default BuilderScreen;
