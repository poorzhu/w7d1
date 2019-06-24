export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

// explicit return for easier debugging
const receiveTodos = todos => {
  return {  
    type: RECEIVE_TODOS,
    todos
  };
};

const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export { 
  receiveTodos,
  receiveTodo
};