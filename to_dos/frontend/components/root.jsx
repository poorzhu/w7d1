import React from 'react';
import {Provider} from 'react-redux';
import App from './app';
import ToDoList from './todos/todo_list';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
    <ToDoList />
  </Provider>
);

export default Root;
