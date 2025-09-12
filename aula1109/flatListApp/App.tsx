import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import Pessoa, {AppState, PessoaData} from './src/components/Pessoa';

class App extends Component<unknown, AppState> {
  constructor(props: unknown){
    super(props);
    this.state = {
      feed: [
        {nome: 'Joao Galescky', idade: 20, email: 'joaogalescky@gmail.com'},
        {nome: 'Adriel', idade: 20, email: 'adriel@gmail.com'},
        {nome: 'João Schmidt', idade: 20, email: 'joaoschmidt@gmail.com'},
        {nome: 'Emerson', idade: 20, email: 'emerson@gmail.com'},
        {nome: 'Nicole', idade: 20, email: 'nicole@gmail.com'},
        {nome: 'Joao Galescky', idade: 20, email: 'joaogalescky@gmail.com'},
        {nome: 'Adriel', idade: 20, email: 'adriel@gmail.com'},
        {nome: 'João Schmidt', idade: 20, email: 'joaoschmidt@gmail.com'},
        {nome: 'Emerson', idade: 20, email: 'emerson@gmail.com'},
        {nome: 'Nicole', idade: 20, email: 'nicole@gmail.com'},
        {nome: 'Joao Galescky', idade: 20, email: 'joaogalescky@gmail.com'},
        {nome: 'Adriel', idade: 20, email: 'adriel@gmail.com'},
        {nome: 'João Schmidt', idade: 20, email: 'joaoschmidt@gmail.com'},
        {nome: 'Emerson', idade: 20, email: 'emerson@gmail.com'},
        {nome: 'Nicole', idade: 20, email: 'nicole@gmail.com'},
        {nome: 'Joao Galescky', idade: 20, email: 'joaogalescky@gmail.com'},
        {nome: 'Adriel', idade: 20, email: 'adriel@gmail.com'},
        {nome: 'João Schmidt', idade: 20, email: 'joaoschmidt@gmail.com'},
        {nome: 'Emerson', idade: 20, email: 'emerson@gmail.com'},
        {nome: 'Nicole', idade: 20, email: 'nicole@gmail.com'},
        {nome: 'Joao Galescky', idade: 20, email: 'joaogalescky@gmail.com'},
        {nome: 'Adriel', idade: 20, email: 'adriel@gmail.com'},
        {nome: 'João Schmidt', idade: 20, email: 'joaoschmidt@gmail.com'},
        {nome: 'Emerson', idade: 20, email: 'emerson@gmail.com'},
        {nome: 'Nicole', idade: 20, email: 'nicole@gmail.com'}
      ]
    }
  }

  private renderItem: ListRenderItem<PessoaData> = ({item}) => <Pessoa data={item}/>

  render(){
    return(
      <View style={styles.container}>
      <FlatList data={this.state.feed} renderItem={({item}) => <Pessoa data={item}/>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;