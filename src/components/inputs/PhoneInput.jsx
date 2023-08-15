import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export const PhoneInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        placeholder="Enter your phone number"
        style={styles.input}
        keyboardType="phone-pad"
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
