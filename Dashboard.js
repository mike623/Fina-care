import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        backdropColor="white"
        isVisible={this.props.modalIsOpen}
        contentLabel="Example Modal"
      >
        <TouchableOpacity onPress={this.props.onClosePress}>
          <Text>close</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default Dash;
