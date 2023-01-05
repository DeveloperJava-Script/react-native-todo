import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoList from '../components/TodoList';
import AddTodoBtn from '../components/AddTodoBtn';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AzaliaNow</Text>
      <TodoList />

      <AddTodoBtn pressHandler={() => navigation.navigate('AddTodo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  title: {
    color: '#FF003C',
    fontSize: 36,
  },
});
