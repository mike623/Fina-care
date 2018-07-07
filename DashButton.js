import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
export class DashButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          style={{ width: 48, height: 48 }}
          source={require("./assets/btn-dashboard.png")}
        />
      </TouchableOpacity>
    );
  }
}
