import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function ProductDetailsScreen() {
  return (
    <View style={styles.productContainer}>
      <Text>Product Details</Text>
    </View>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
