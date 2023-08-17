import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';

export const MainButton = ({name, btnColor, icon, onPressFunction}) => {
  return (
    <TouchableOpacity
      onPress={() => (onPressFunction ? onPressFunction() : '')}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '50%',
        backgroundColor: btnColor,
        borderRadius: 8,
        padding: 10,
      }}>
      {icon}
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
