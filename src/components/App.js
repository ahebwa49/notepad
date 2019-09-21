import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleNote } from "../actions/toggleNote";
import PlusButton from "./PlusButton";

const mapStateToProps = state => {
  console.log(state);
  return {
    note: state.note
  };
};

const mapDispatchToProps = dispatch => ({
  toggleNewNote: note => {
    dispatch(toggleNote(note));
  }
});

class DisplayNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      displayForm: false,
      note: {
        title: "",
        content: ""
      },
      notes: []
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  handleDisplay() {
    this.setState({
      displayForm: !this.state.displayForm
    });
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
    this.setState(({ note, notes, displayForm }) => ({
      notes: this.state.notes.concat(this.state.note),
      note: {
        title: "",
        content: ""
      },
      displayForm: false
    }));
  }
  render() {
    const styles = {
      container: {
        displayForm: "grid",
        padding: "2rem"
      },
      form: {
        display: "grid",
        justifyItems: "center",
        justifySelf: "center",
        border: "1px solid red"
      }
    };
    console.log(this.state.notes);
    const notesRender = this.state.notes.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            this.props.toggleNewNote({ ...item, toggled: true });
          }}
          style={{
            cursor: "pointer",
            listStyle: "none",
            //textDecoration: this.props.note.toggled ? "line-through" : "none"
          }}
        >
          {item.title}
        </li>
      );
    });
    return (
      <div style={styles.container}>
        <div id="notepad">
          <div id="button" onClick={this.handleDisplay}>
            <PlusButton />
          </div>
          <h1 id="heading">My awesome notepad</h1>
          <div id="title">
            <ul>{notesRender}</ul>
          </div>
          <div id="content">{this.props.note.content}</div>
        </div>
        {this.state.displayForm && (
          <div style={styles.form} id="form">
            <h1>New note</h1>
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
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayNotes);
