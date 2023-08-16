import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../styles/styles';

export const AddedImage = () => {
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={{
          uri: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083449025292/221010160011128841.png@webp',
        }}
        style={{width: '100%', height: '100%'}}
      />
      <TouchableOpacity style={styles.crossWrapper}>
        <Entypo name="cross" style={{fontSize: 20, color: COLORS.red}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  crossWrapper: {
    position: 'absolute',
    top: -12,
    right: 0,
  },
});
