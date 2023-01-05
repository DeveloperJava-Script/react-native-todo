import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function AddTodoBtn({pressHandler}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={pressHandler}>
      <Icon name={'plus'} color={'#fff'} size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 56,
    height: 56,
    backgroundColor: '#222F3E',
    borderRadius: 56 / 2,
    position: 'absolute',
    right: 36,
    bottom: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
