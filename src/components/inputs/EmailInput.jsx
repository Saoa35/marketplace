import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export const EmailInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        keyboardType="email-address"
      />
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
