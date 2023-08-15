import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';

export const PlusButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="pluscircle" style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right: 18,
  },
  image: {
    fontSize: 65,
    color: COLORS.green,
  },
});
