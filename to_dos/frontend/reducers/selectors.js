const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  const result = keys.map(key => {
    return state.todos[key];
  });
  return result;
};

export default allTodos;