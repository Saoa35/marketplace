import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';

export const PlusButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('AddProduct')}>
      <AntDesign name="pluscircle" style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right: 18,
    backgroundColor: COLORS.buttonTextColor,
    borderRadius: 9999,
  },
  image: {
    fontSize: 65,
    color: COLORS.green,
  },
});
