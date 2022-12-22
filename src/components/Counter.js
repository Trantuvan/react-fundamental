import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate = () => {
    console.log(this.state.count);
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>Count - {count}</div>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default Counter;
