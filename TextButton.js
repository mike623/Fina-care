import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
export class TextButton extends Component {
  render() {
    return (<TouchableOpacity>
      <Image style={{ width: 48, height: 48 }} source={require('./assets/btn-text-input.png')} />
    </TouchableOpacity>);
  }
}