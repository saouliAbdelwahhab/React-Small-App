import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      prenom: ""
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { prenom } = this.state;
    const name = this.state.name;

    return (
      <form>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="prenom"
          value={prenom}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="button"
          class="button button2"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
}

export default Form;
