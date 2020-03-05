import React, { Component } from "react";
import TaskListItem from "./TaskListItem";

export default class TaskList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="list-group">
            {this.props.tasks.map(({ id, ...others }) => (
              <TaskListItem
                key={id}
                id={id}
                {...others}
                updateComplete={this.props.updateComplete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
