import React, {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const updateTodos = items => {
    setTodos(items);
    AsyncStorage.setItem('todos', JSON.stringify(items));
  };

  const addTodo = title => {
    const todo = {id: Math.random().toString(), title, finished: false};
    updateTodos([todo, ...todos]);
  };

  const finishTodo = id => {
    const newTodos = todos.map(i => {
      if (i.id == id) {
        return {...i, finished: !i.finished};
      }
      return {...i};
    });
    updateTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(i => i.id != id);
    updateTodos(newTodos);
  };

  const getTodos = async () => {
    const items = await AsyncStorage.getItem('todos');
    setTodos(JSON.parse(items));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        finishTodo,
        deleteTodo,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useAppContext};
