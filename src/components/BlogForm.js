import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChanges = this.onDescChanges.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: props.blog ? props.blog.title : "",
      description: props.blog ? props.blog.description : "",
      dateAdded: Date.now(),
      error: "",
    };
  }

  onTitleChange(e) {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  }
  onDescChanges(e) {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState({ error: "lütfen tüm alanları doldurunuz" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now(),
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.onDescChanges}
            ></textarea>
          </div>
          <button type="submit">Save Changes</button>
        </form>
        <div>{this.state.error && <div>{this.state.error}</div>}</div>
      </div>
    );
  }
}
