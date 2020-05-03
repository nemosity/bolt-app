import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectVariation } from '../../../../actions/builderActions';
import styles from './styles';
import Variation from '../Variation';
import { selectedItemVariationsSelector } from '../../../../selectors';

const OptionSet = (props) => (
  <View style={styles.container}>
    <View style={styles.variations}>
      {props.variations.map((variation) => (
        <Variation
          variation={variation}
          optionID={props.optionID}
          itemID={props.itemID}
          key={variation._id}
          selected={
            props.selections
              ? props.selections[props.optionID] === variation._id
              : false
          }
          selectVariation={props.selectVariation}
        />
      ))}
    </View>
  </View>
);

OptionSet.propTypes = {
  variations: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionID: PropTypes.string.isRequired,
  itemID: PropTypes.string.isRequired,
  selectVariation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selections: selectedItemVariationsSelector(state),
});

export default connect(mapStateToProps, { selectVariation })(OptionSet);
