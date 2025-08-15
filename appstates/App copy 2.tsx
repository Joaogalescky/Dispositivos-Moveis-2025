import React, {Component} from "react";
import {View, Text, Button, GestureResponderEvent} from "react-native"

type AppProps = { };
type AppState = {nome: string};

class App extends Component<AppProps, AppState>{
  state: AppState = {nome: ''};

  mudar = (_event?: GestureResponderEvent) => {
    this.setState({
      nome: "TADS"
    })
  }

  entrarComNome = (nome: string) => {
    this.setState({nome});
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Button title="Mudar State" onPress={() => this.entrarComNome('TADS2')}></Button>
        <Text style={{fontSize: 23, color: '#05D8F5', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
    )
  }
}

export default App;