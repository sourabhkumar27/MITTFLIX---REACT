import React, { Component } from "react";
import "../App.css";

export default class InputForm extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form id="search" className="search" onSubmit={this.onFormSubmit}>
        <input
          type="search"
          placeholder="Search for a title..."
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
