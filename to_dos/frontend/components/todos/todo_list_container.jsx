import ToDo from './todo_list';
import allTodos from '../../reducers/selectors';
import receiveTodo from '../../actions/todo_actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {todos: allTodos(state)};
};

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

// this is a candy wrapper
// ??? connect passes state + dispatch as props to component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);