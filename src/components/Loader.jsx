import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {COLORS} from '../styles/styles';

export const Loader = () => {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size={'large'} color={COLORS.green} />
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
