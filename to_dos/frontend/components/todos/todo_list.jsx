import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// this is candy
class TodoList extends React.Component {
  
  render() {
    const todos = this.props.todos;
    
    const todosList = todos.map(todo => {
      return(
        <TodoListItem todo={todo} />
      );
    });
    return(
      <>
        <div>{todosList}</div>
        <TodoForm receiveTodo={ this.props.receiveTodo }/>
      </>
    );
  }
}

export default TodoList;