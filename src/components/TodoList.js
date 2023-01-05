import React from 'react';
import {Text} from 'react-native';
import TodoItem from './TodoItem';
import {useAppContext} from '../context/AppContext';

export default function TodoList() {
  const {todos} = useAppContext();
  return todos.length ? (
    todos.map(item => <TodoItem key={item.id} item={item} />)
  ) : (
    <Text style={{color: '#222F3E', fontSize: 16, paddingTop: 20}}>
      У вас пока нет заявок, скорее добавьте!
    </Text>
  );
}
