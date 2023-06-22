import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      description: "",
      gender: "",
      acceptTerms: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert(
      "User name: " +
        this.state.userName +
        "\n" +
        "Description: " +
        this.state.description +
        "\n" +
        "Gender: " +
        this.state.gender +
        "\n" +
        "Accept terms: " +
        this.state.acceptTerms
    );
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}></textarea>
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}>
              <option>Choose...</option>
              <option value="male">Male</option>
              <option value="fmale">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              name="acceptTerms"
              type="checkbox"
              checked={this.state.acceptTerms}
              onChange={this.handleChange}></input>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserForm;
