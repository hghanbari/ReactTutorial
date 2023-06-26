import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  setEditingState = (isEditing) => {
    this.setState({ task: this.props.taskItem.task, isEditing: isEditing });
  };
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
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
              <button
                className="save"
                onClick={this.handleSubmit}
                type="Submit">
                Save
              </button>
              <button
                className="back"
                onClick={() => this.setEditingState(false)}
                type="bottun">
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
              <button
                className="edit"
                onClick={() => this.setEditingState(true)}>
                Edit
              </button>
              <button className="delet" onClick={this.deleteTask}>
                Delet
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
