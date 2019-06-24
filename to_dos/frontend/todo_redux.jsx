import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors'

window.store = configureStore;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store}/>, rootElement);
});