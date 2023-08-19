import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../styles/styles';

export const AddedImage = ({picture, deletePhoto, id}) => {
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={{
          uri: picture,
        }}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
      <TouchableOpacity
        style={styles.crossWrapper}
        onPress={() => deletePhoto(id)}>
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
