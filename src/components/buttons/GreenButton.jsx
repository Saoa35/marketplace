import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';

export const GreenButton = ({name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{name}</Text>
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
    color: COLORS.buttonTextColor,
    fontSize: 24,
    fontWeight: '600',
  },
});
