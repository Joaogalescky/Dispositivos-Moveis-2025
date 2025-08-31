import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface GreetingProps {
  name: string;
  size?: number; // '?' de opcional
}

class Greeting extends Component<GreetingProps> {
  render() {
    const { name, size } = this.props;
    const fontSize = size || 14 // Pode-ser ou tamanho 'size' ou 14px

    return (
      <View>
        <Text style={{ fontSize }}>Olá, {name}!</Text>
      </View>
    );
  }
}

export default Greeting;
