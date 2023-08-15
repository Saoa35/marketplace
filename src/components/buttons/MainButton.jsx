import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';

export const MainButton = ({name, btnColor}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        width: '50%',
        backgroundColor: btnColor,
        borderRadius: 8,
        padding: 10,
      }}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    color: COLORS.buttonTextColor,
    fontSize: 24,
    fontWeight: '600',
  },
});
