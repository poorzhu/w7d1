import React from 'react';

// this is candy
class TodoList extends React.Component {
  
  render() {
    debugger;
    const todos = this.props.todos;
    
    const todosList = todos.map( todo => {
      return(
      <li key={todo.id}> 
        
        {todo.title} 
        <br/>
        {todo.body}
      </li>);
    })
    
    return todosList;
  }
  
}

export default TodoList;

// const TodoList = () => {
//   // where does props come from?
//   //how to use the connect export
//   debugger;
//   return (
//   <ul>

//   </ul>
//   );
// };