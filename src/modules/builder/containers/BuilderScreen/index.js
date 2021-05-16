import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { prepareForPayment } from '../../../../actions/builderActions';
import OptionSet from '../../components/OptionSet';
import styles from './styles';

import {
  selectedItemSelector,
  selectedStoreSelector,
  itemSelector,
  itemTotalSelector,
  itemValidatorSelector,
  selectedItemVariationsSelector,
} from '../../../../selectors';

class BuilderScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  constructor(props) {
    super(props);
    this.selectBuyButton = this.selectBuyButton.bind(this);
  }

  selectBuyButton() {
    const { storeID, itemID, variations } = this.props;
    this.props.prepareForPayment(storeID, itemID, variations);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.item.options.map(option => (
          <View key={option._id} style={styles.option}>
            <Text style={styles.optionHeading}>{option.name}</Text>
            <OptionSet
              optionID={option._id} // eslint-disable-line no-underscore-dangle
              itemID={this.props.item._id} // eslint-disable-line no-underscore-dangle
              onPressVariation={null}
              variations={option.variations}
            />
          </View>
        ))}
      </View>
    );
  }
}

BuilderScreen.propTypes = {
  item: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  valid: PropTypes.bool.isRequired,
  itemTotal: PropTypes.number.isRequired,
  prepareForPayment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  itemID: selectedItemSelector(state),
  storeID: selectedStoreSelector(state),
  variations: selectedItemVariationsSelector(state),
  item: itemSelector(state),
  itemTotal: itemTotalSelector(state),
  valid: !!itemValidatorSelector(state),
});

export default connect(mapStateToProps, { prepareForPayment })(BuilderScreen);
