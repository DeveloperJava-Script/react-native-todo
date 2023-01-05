import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useAppContext} from '../context/AppContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function TodoItem({item}) {
  const {deleteTodo, finishTodo} = useAppContext();
  const rightSwipe = () => {
    return <View style={styles.swipe}></View>;
  };

  const handleDelete = () => {
    deleteTodo(item.id);
  };

  const handleFinish = () => {
    finishTodo(item.id);
  };

  return (
    <Swipeable
      onSwipeableRightOpen={handleDelete}
      renderRightActions={rightSwipe}>
      <View style={styles.item}>
        <TouchableOpacity
          style={[styles.box, item.finished && {backgroundColor: '#222F3E'}]}
          onPress={handleFinish}>
          {item.finished && <Icon name={'check'} color={'#FAFAFE'} size={12} />}
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            item.finished && {opacity: 0.5, textDecorationLine: 'line-through'},
          ]}>
          {item.title}
        </Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 9,
    height: 44,
    backgroundColor: '#FAFAFE',
    alignItems: 'center',
    elevation: 3,
    marginTop: 12,
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    color: '#222F3E',
  },
  box: {
    borderRadius: 4,
    borderWidth: 2,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#222F3E',
    marginRight: 16,
  },
  swipe: {
    backgroundColor: '#fff',
    width: 1,
    height: '100%',
  },
});
