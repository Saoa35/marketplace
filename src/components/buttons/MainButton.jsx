import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';

export const MainButton = ({name, btnColor, icon, screen}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => (screen ? navigation.navigate(screen) : '')}
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
