import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, GestureResponderEvent } from 'react-native';

type CounterProp = {};
type CounterState = { count: number };

class Counter extends Component<CounterProp, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // incrementar = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // }

  // decrementar = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count - 1,
  //   }));
  // }

  incrementar = (_event?: GestureResponderEvent) => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrementar = (_event?: GestureResponderEvent) => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="-1" onPress={this.decrementar}></Button>
        <Text style={styles.counter}>{this.state.count}</Text>
        <Button title="+1" onPress={this.incrementar}></Button>
      </View>
    );
  }
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'sans-serif'
  },
  counter: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#76CEE6",
  },
});