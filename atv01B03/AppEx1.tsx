import React, {Component} from 'react'

interface GreetingProps {
  name: string;
  size?: string; // '?' de opcional
}

class Greeting extends Component<GreetingProps> {
  render() {
    const {name, size} = this.props;
    const fontSize = size || '14px' // Pode-ser ou tamanho 'size' ou 14px
    
    return (
      <div style={{fontSize}}>
        Olá, {name}!
      </div>
    );
  }
}

export default Greeting;
