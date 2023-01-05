import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import {useAppContext} from '../context/AppContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function AddTodoScreen({navigation}) {
  const {addTodo} = useAppContext();
  const [value, setValue] = useState('');

  const goBack = () => {
    navigation.navigate('Home');
  };

  const handlePress = () => {
    if (value.length == 0) {
      Alert.alert('Внимание!', 'Заполните поле.');
      return;
    }
    addTodo(value);
    setValue('');
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        activeOpacity={0.8}
        onPress={goBack}>
        <Icon name={'arrow-left'} color={'#222F3E'} size={24} />
        <Text style={styles.backBtnText}>Вернуться назад</Text>
      </TouchableOpacity>
      <View style={{marginTop: windowHeight / 4}}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={txt => setValue(txt)}
          autoCorrect={false}
        />
        <TouchableOpacity
          style={[
            styles.btn,
            value.length == 0 && {backgroundColor: 'rgba(34, 47, 62, 0.5)'},
          ]}
          onPress={handlePress}>
          <Text style={styles.btnText}>Добавить</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  title: {
    color: '#009CF3',
    fontSize: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  input: {
    width: '100%',
    height: 44,
    color: '#222F3E',
    borderRadius: 8,
    paddingLeft: 13,
    fontSize: 24,
    backgroundColor: '#FAFAFE',
    elevation: 3,
    paddingTop: 0,
    paddingBottom: 0,
  },
  btn: {
    width: '100%',
    backgroundColor: '#222F3E',
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 24,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnText: {
    fontSize: 28,
    color: '#999999',
    fontWeight: '500',
    marginLeft: 30,
  },
});
