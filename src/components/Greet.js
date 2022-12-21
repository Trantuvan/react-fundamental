import React from "react";

const Greet = (props) => {
  return (
    <h1 className="greet">
      Hello {props.name} a.k.a {props.heroName}
    </h1>
  );
};

export default Greet;
