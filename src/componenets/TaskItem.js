import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tsks: this.props.taskItem.task,
      isEditing: false,
    };
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };

  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form>
                <input
                  value={this.stats.task}
                  onChange={this.handleChenge}
                  autoFocus
                />
              </form>
            </td>
            <td>
              <button>Save</button>
              <button>Back</button>
            </td>
          </>
        ) : (
          <>
            <td>{this.props.taskItem.task}</td>
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
