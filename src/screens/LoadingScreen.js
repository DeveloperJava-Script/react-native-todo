import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default function LoadingScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AzaliaNow</Text>
      <ActivityIndicator style={{paddingTop: 30}} color={'#FF003C'} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFE',
  },
  title: {
    color: '#FF003C',
    fontSize: 36,
  },
});
