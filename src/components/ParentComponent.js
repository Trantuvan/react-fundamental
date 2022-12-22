import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  state = { parentName: "Parent" };

  greetParent = (childName) => {
    const { parentName } = this.state;

    alert(`Hello ${parentName} from ${childName}`);
  };

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent} />
      </>
    );
  }
}
