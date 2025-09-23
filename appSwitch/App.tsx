import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

interface State {
  estaHabilitado: boolean;
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      estaHabilitado: false,
    }
  }

  alteraSwitch = (novoValor: boolean) => {
    this.setState({ estaHabilitado: novoValor });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Switch está: {this.state.estaHabilitado ? "Habilitado" : "Desabilitado"}
        </Text>
        <Switch value={this.state.estaHabilitado}
          onValueChange={this.alteraSwitch}
          trackColor={{false : "#3B9B96", true : "#0BD2C8"}} thumbColor={this.state.estaHabilitado ? "#0BD2C8" : "#3B9B96"}>
        </Switch>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 18,
    marginBottom: 20
  }
});
