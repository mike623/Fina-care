import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
export class RecButton extends Component {
  render() {
    return (<TouchableOpacity onPress={this.props.onPress}>
      <Image style={{ width: 80, height: 80 }} source={require('./assets/btn-record.png')} />
    </TouchableOpacity>);
  }
}