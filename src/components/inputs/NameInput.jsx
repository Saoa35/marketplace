import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export const NameInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="Enter your name" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '90%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    letterSpacing: 1,
  },
});
