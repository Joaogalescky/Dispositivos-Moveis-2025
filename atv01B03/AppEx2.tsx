import React, {Component} from 'react'

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  incrementar = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrementar = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    const {count} = this.state;

    return (
      <div>
        <button onClick={this.incrementar}>
          + 1
        </button>
        <div>{count}</div>
        <button onClick={this.decrementar}>
          - 1
        </button>
      </div>
    )
  }
}

const styles = {
  container: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'50vh',
    fontFamily:'sans-serif'
  },
  counter: {
    fontSize:'25px',
    fontWeight:'bold',
    margin:'0 20px'
  }
}

export default Counter;
