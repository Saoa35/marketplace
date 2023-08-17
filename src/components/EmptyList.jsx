import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {COLORS} from '../styles/styles';

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{
          uri: 'https://www.safetylensusa.com/assets/front_end/images/empty_product_list.png',
        }}
      />
      <Text style={styles.description}>Product list is currently empty...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  description: {
    fontWeight: 'bold',
    color: COLORS.title,
  },
});
