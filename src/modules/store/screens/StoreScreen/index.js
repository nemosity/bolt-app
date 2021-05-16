import React, { Component } from 'react';
import {
  Text,
  StatusBar,
  Image,
  ScrollView,
  View,
  LayoutAnimation,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectItem,
  prepareForPayment,
} from '../../../../actions/builderActions';
import MenuItem from '../../components/MenuItem';
import styles from './styles';
import {
  storeSelector,
  selectedItemSelector,
  itemSelector,
  itemTotalSelector,
  itemValidatorSelector,
  selectedStoreSelector,
  selectedItemVariationsSelector,
  cartTotalSelector,
  cartSelector,
  cartCountSelector,
} from '../../../../selectors';
import Separator from '../../../../common/components/Separator';
import Builder from '../../../../modules/builder/containers/BuilderScreen';
import BuyButton from '../../../../modules/builder/components/BuyButton';

class StoreScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0,
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

  UNSAFE_componentWillMount() {
    this.props.navigation.setParams({ title: this.props.store.name });
  }

  UNSAFE_componentWillReceiveProps() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <StatusBar hidden />
          <View style={styles.storeHero}>
            <Image
              source={{ uri: `${this.props.store.image}`, cache: 'default' }}
              style={styles.storeImage}
            />
            <Text style={styles.heroText}>{`${this.props.store.name}`}</Text>
            <Text
              style={styles.heroSubText}>{`${this.props.store.location}`}</Text>
          </View>
          <Separator />
          <Text style={styles.heading}>MENU</Text>
          {/* TODO Embed customise screen into the menu */}
          {this.props.store.menu?.map(menuItem => (
            <View key={menuItem._id}>
              <MenuItem
                id={menuItem._id}
                onPressItem={() => this.props.selectItem(menuItem._id)}
                title={menuItem.title}
                price={menuItem.price}
              />
              {/* {menuItem._id === this.props.selectedItem ? <Builder /> : null} */}
              <Separator />
            </View>
          ))}
          <Text />
        </ScrollView>
        {this.props.valid ? (
          <View style={styles.buyButton}>
            <View style={styles.buyButtonLeft}>
              <Text
                style={styles.buyPriceText}>{`$${this.props.cartTotal.toFixed(
                2,
              )}`}</Text>
              <Text style={styles.buyItemText}>
                {this.props.itemCount === 1
                  ? this.props.store.menu.find(
                      x => x._id === this.props.items[0]._id,
                    ).title
                  : `${this.props.itemCount} items`}
              </Text>
            </View>
            <BuyButton
              onPress={this.selectBuyButton}
              disabled={!this.props.valid}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

StoreScreen.propTypes = {
  store: PropTypes.shape({
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  selectItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  store: storeSelector(state),
  selectedItem: selectedItemSelector(state),
  //itemTotal: itemTotalSelector(state),
  items: state.cart.items,
  itemCount: cartCountSelector(state),
  //valid: !!itemValidatorSelector(state),
  valid: state.cart.items.length > 0,
  itemID: selectedItemSelector(state),
  storeID: selectedStoreSelector(state),
  variations: selectedItemVariationsSelector(state),
  item: itemSelector(state),
  cartTotal: cartTotalSelector(state),
});

export default connect(mapStateToProps, { selectItem, prepareForPayment })(
  StoreScreen,
);
