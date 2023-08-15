import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';

export const EditButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons name="edit" style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.green,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    bottom: 0,
    right: 0,
  },
  image: {
    fontSize: 30,
    color: COLORS.buttonTextColor,
  },
});
