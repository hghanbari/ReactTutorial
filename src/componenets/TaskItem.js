import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                />
              </form>
            </td>
            <td>
              <button onClick={this.handleSubmit} type="Submit">
                Save
              </button>
              <button onClick={() => this.setEditingState(false)} type="bottun">
                Back
              </button>
            </td>
          </>
        ) : (
          <>
            <td onClick={this.toggleTask}>
              <input
                type="checkbox"
                readOnly
                checked={this.props.taskItem.isCompleted}
              />
              <span
                className={
                  this.props.taskItem.isCompleted
                    ? "completed"
                    : "not-completed"
                }>
                {this.props.taskItem.task}
              </span>
            </td>
            <td>
              <button onClick={() => this.setEditingState(true)}>Edit</button>
              <button onClick={this.deleteTask}>Delet</button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
