import React, { Component } from "react";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";

import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask = task => {
    this.setState(state => ({ tasks: [task, ...state.tasks] }));
  };

  updateComplete = id => {
    const tasks = this.state.tasks.map(task =>
      task.id === id
        ? {
            ...task,
            isCompleted: true
          }
        : task
    );

    this.setState({ tasks });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center text-danger m-3">Task List</h3>
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.length > 0 && (
          <TaskList
            tasks={this.state.tasks}
            updateComplete={this.updateComplete}
          />
        )}
      </div>
    );
  }
}
