import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export const Input = ({labelName, placeholderName}) => {
  return (
    <View style={styles.iputContainer}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>{labelName}</Text>
        <TextInput placeholder={placeholderName} style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iputContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  inputWrapper: {
    width: '90%',
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
