import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';

export const MainButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>Sign In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '50%',
    backgroundColor: COLORS.green,
    borderRadius: 8,
    padding: 10,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
});
