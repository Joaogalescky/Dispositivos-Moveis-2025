import React, {Component} from "react";
import {View, Text, Button, GestureResponderEvent} from "react-native"

type AppProps = { };
type AppState = {nome: string};

class App extends Component<AppProps, AppState>{
  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: "TADS"
    };
    this.mudar = this.mudar.bind(this);
  }

  mudar = (_event?: GestureResponderEvent) => {
    this.setState({
      nome: "Tecnologia em Análise e Desenvolvimento de Sistemas"
    })
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Button title="Mudar State" onPress={this.mudar}></Button>
        <Text style={{fontSize: 23, color: 'red', textAlign: 'center'}}></Text>
          {this.state.nome}
      </View>
    )
  }
}

export default App;