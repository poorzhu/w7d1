import { receiveTodo } from '../actions/todo_actions.js'

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todoReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case 'RECEIVE_TODOS':
      for (let i = 0; i < action.todos.length; i++) {
        const todo = {
          id: action.todos[i].id,
          title: action.todos[i].title,
          body: action.todos[i].body,
          done: action.todos[i].done
        };
        
        nextState[action.todos[i].id] = todo;
      }  

      return nextState;

    case 'RECEIVE_TODO':
      const todo = action.todo;

      nextState[action.todo.id] = todo;

      return nextState;

    default:
        return state;
  }
};

export default todoReducer;
