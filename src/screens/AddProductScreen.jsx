import React from 'react';
import {Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function AddProductScreen() {
  return (
    <View style={styles.addContainer}>
      <Text>Add Product</Text>
    </View>
  );
}

export default AddProductScreen;

const styles = StyleSheet.create({
  addContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
