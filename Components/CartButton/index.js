import React, { Component } from "react";
import { Icon, Text, View } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.items.length}</Text>
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.cartReducer.items
});
export default connect(mapStateToProps)(withNavigation(CartButton));
