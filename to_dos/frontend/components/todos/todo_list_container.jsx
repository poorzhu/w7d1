import ToDo from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

// why are we passing dispatch?
const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);

export default ToDoListContainer;

// what is going on here? all of it.