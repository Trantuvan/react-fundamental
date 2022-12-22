import React, { Component } from "react";

export default class Message extends Component {
  state = {
    message: "Welcome visitor",
  };

  changeMessage = () => {
    this.setState({
      message: "thank you for subscribing",
    });
  };

  render() {
    const { message } = this.state;
    return (
      <>
        <h1>{message}</h1>
        <button onClick={this.changeMessage}>Subcribe</button>
      </>
    );
  }
}
