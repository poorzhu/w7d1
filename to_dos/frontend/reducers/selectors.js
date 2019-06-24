const allTodos = (state) => {
  keys = Object.keys(state.todos);
  return keys.map(key => {
    return state.todos[key];
  });
};

export default allTodos;