import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';

export const ProductItem = ({title, description, price, preview}) => {
  const navigation = useNavigation();

  const truncateText = str => {
    if (str.length >= 50) {
      return str.substring(0, 100) + '...';
    }
    return str;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails')}
      style={{width: '85%', marginBottom: 10}}>
      <View style={styles.cardContainer}>
        {preview && (
          <Image
            source={{
              uri: preview,
            }}
            style={styles.imageStyle}
          />
        )}
        <View style={styles.contantContainer}>
          <View style={styles.contantTitle}>
            <Text style={styles.itemName}>{title}</Text>
            <Text style={styles.itemPrice}>${price}</Text>
          </View>
          <Text style={styles.itemDescription}>
            {truncateText(description)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: COLORS.buttonTextColor,
    elevation: 5,
  },
  imageStyle: {
    width: '35%',
    height: '100%',
    resizeMode: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contantContainer: {
    flex: 1,
    padding: 12,
  },
  contantTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.title,
  },
  itemPrice: {
    fontSize: 15,
    color: COLORS.green,
    fontWeight: '700',
    fontWeight: '700',
  },
  itemDescription: {
    color: COLORS.title,
  },
});
