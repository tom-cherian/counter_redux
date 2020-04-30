import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodos, deleteTodos } from "../redux";

class AddTodo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Number of todos - {this.props.numOfTodos}</h2>
        <button onClick={this.props.addTodos}>Add</button>
        <button onClick={this.props.deleteTodos}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.numOfTodos);
  return {
    numOfTodos: state.numOfTodos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: () => dispatch(addTodos()),
    deleteTodos: () => dispatch(deleteTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
