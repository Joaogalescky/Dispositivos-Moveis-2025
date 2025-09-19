import Slider from '@react-native-community/slider';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface State {
  valor: number;
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {valor: 50 }
  }

  handleSlidingComplete = (valorFinal: number) => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Exemplo de Slider</Text>

        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={this.state.valor}
          onValueChange={(valor => this.setState({ valor }))
          }
          onSlidingComplete={this.handleSlidingComplete}
          minimumTrackTintColor='#1EB1FC'
          maximumTrackTintColor='#8E8E93'
          thumbTintColor='#1EB1FC'
        />
        <Text style={styles.valor}>Valor selecionado: {this.state.valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  valor: {
    
  }
});
