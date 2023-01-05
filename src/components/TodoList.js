import React from 'react';
import {View} from 'react-native';
import TodoItem from './TodoItem';
import {useAppContext} from '../context/AppContext';

export default function TodoList() {
  const {todos} = useAppContext();
  console.log(todos);
  return todos.map(item => <TodoItem key={item.id} item={item} />);
}
