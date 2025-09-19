import { Picker } from '@react-native-picker/picker';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Pizza {
  key: number;
  nome: string;
  valor: number;
}

interface State {
  pizza: number;
  pizzas: Pizza[];
}

export default class App extends Component<{}, State> {
  constructor(props:{}){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: "Calabresa", valor: 40.99},
        {key: 2, nome: "Pepperoni", valor: 40.99},
        {key: 3, nome: "Strognoff", valor: 55.99},
        {key: 3, nome: "Bahiana", valor: 40.99},
        {key: 3, nome: "Canadense", valor: 40.99},
        {key: 3, nome: "Sensação", valor: 55.99},
      ]
    }
  }

  render(){
    let pizzaItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker 
        selectedValue={this.state.pizza} 
        onValueChange={(itemValue) => 
          this.setState({pizza: itemValue})}
        >
          {pizzaItem}
          {/* <Picker.Item key={1} value={1} label="Calabresa"/>
          <Picker.Item key={2} value={2} label="Pepperoni"/>
          <Picker.Item key={3} value={3} label="Sedução"/> */}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>Valor R$: {this.state.pizzas[this.state.pizza].valor}</Text>
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
  pizzas: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 28
  }
});
