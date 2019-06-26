import React from 'react';
import uniqueId from '../../util/TodoApiUtil';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(property) {
    return e => this.setState({ [property]: e.target.value });  
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    }); // reset form
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>Title:
          <input 
            type="text" 
            value={this.state.title}
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            required>
          </textarea>
        </label>
        <input type="submit" value="Create Todo!"/>
      </form>
    );
  }
}

export default TodoForm;