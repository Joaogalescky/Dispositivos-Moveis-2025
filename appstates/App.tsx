import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"

class App extends Component{

  render() {
    return (
      <View style={style.area}>
        <Text style={style.textPrincipal}> Texto 1</Text>
        <Text style={style.}> Texto 2</Text>
        <Text> Texto 3</Text>
        <Text> Texto 4</Text>
        <Text> Texto 5</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  area: {
    marginTop: 40
  },
  textPrincipal:{
    fontSize: 25,
    color: 'red'
  }
})
export default App;