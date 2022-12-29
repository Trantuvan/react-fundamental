import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      select: "React",
      checkbox: false,
    };
  }

  handleChange = (evt) => {
    const name = evt.target.name;
    // const target = evt.target;
    const value = name === "checkbox" ? evt.target.checked : evt.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, comment, select, checkbox } = this.state;

    return (
      <form onSubmit={(evt) => this.props.handleSubmit(evt, this.state)}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="select">Topics</label>
          <select
            id="select"
            name="select"
            value={select}
            onChange={this.handleChange}
          >
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Selvet">Selvet</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="checkbox">Is going</label>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={checkbox}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
