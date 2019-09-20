import React, { Component } from "react";
class DisplayNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: "",
        content: ""
      },
      notes: []
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState(({ note }) => ({
      note: {
        ...this.state.note,
        title: value
      }
    }));
  }
  handleContentChange(e) {
    const { value } = e.target;
    this.setState(({ note }) => ({
      note: {
        ...this.state.note,
        content: value
      }
    }));
  }
  handleSubmit() {
    this.setState((note, notes) => ({
      notes: this.state.notes.concat(this.state.note),
      note: {
        title: "",
        content: ""
      }
    }));
  }
  render() {
    const styles = {
      container: {
        display: "grid",
        justifyItems: "center"
      }
    };
    console.log(this.state.notes);
    const notesRender = this.state.notes.map(item => {
      return <li key={item}>{item.title}</li>;
    });
    return (
      <div style={styles.container}>
        <h1>My notepad</h1>
        <input
          onChange={this.handleTitleChange}
          value={this.state.note.title}
          placeholder="title"
        />
        <br />
        <input
          onChange={this.handleContentChange}
          value={this.state.note.content}
          placeholder="content"
        />
        <br />
        <button onClick={this.handleSubmit}>submit</button>
        <ul>{notesRender}</ul>
      </div>
    );
  }
}
export default DisplayNotes;
