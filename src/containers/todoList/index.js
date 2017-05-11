import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, deleteTodo, updateTodoText } from 'redux/actions/todos'
import { spotifyApiCall } from 'redux/actions/spotifyApiCall'
import TodoList from 'components/todoList'

class TodolistContainer extends Component {
  componentDidMount() {
    this.props.dispatch(spotifyApiCall())
  }
  render() {
    return (
      <TodoList
        todos={this.props.todos}
        currentlyEditingTodoText={this.props.currentlyEditingTodo.text}
        onTodoAdded={todo => this.props.dispatch(addTodo(todo))}
        onTodoDeleted={id => this.props.dispatch(deleteTodo(id))}
        onTodoCompleted={id => this.props.dispatch(completeTodo(id))}
        onUpdateTodoText={todo => this.props.dispatch(updateTodoText(todo))}
      />
    )
  }
}

export default connect(state => state.todos)(TodolistContainer)
