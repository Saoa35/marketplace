import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const LeftArrowButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome5
        name="arrow-left"
        color={COLORS.title}
        size={20}
        style={{marginLeft: 15}}
      />
    </TouchableOpacity>
  );
};
