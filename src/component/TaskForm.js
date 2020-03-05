import React, { Component } from "react";

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    if (this.state.title.length) {
      const task = {
        id: Date.now(),
        title,
        description,
        date: new Date().toDateString(),
        isCompleted: false
      };

      this.props.addTask(task);
      e.currentTarget.reset();

      this.setState({
        title: "",
        description: ""
      });
    } else {
      this.setState({ error: "Please enter fill the required fields" });

      setTimeout(() => {
        this.setState({
          error: ""
        });
      }, 1300);
    }
  };

  render() {
    return (
      <>
        {this.state.error && (
          <div className="row">
            <div className="col">
              <div className=" alert alert-danger" role="alert">
                {this.state.error}
              </div>
            </div>
          </div>
        )}
        <form
          className="mt-3 shadow p-3 mb-5 bg-white rounded"
          onSubmit={this.handleSubmit}
        >
          <div className="row  form-group">
            <div className="col-md-2 col-sm-12">
              <label>
                Title <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-md-10 col-sm-12">
              <input
                className="form-control"
                name="title"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-2 col-sm-12">
              <label>
                Description <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-md-10 col-sm-12">
              <textarea
                className="form-control"
                name="description"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row justify-content-end mb-3">
            <div className="col-sm-12 col-md-2">
              <button className="btn btn-block btn-outline-primary">add</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
