import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    return (
      <button onClick={() => this.props.greetHandler("child")}>
        Greet Parent
      </button>
    );
  }
}
