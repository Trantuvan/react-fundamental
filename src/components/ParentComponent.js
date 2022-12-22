import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  state = { parentName: "Parent" };

  greetParent = () => {
    const { parentName } = this.state;

    alert(`Hello ${parentName}`);
  };

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent} />
      </>
    );
  }
}
